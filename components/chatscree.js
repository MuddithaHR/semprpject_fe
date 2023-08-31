import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { translate } = require('@vitalets/google-translate-api');

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([]);
  }, []);

  const onSend = async (newMessages = []) => {
    const userMessage = newMessages[0];

    // Display user's message immediately
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, [
        {
          ...userMessage,
          _id: messages.length + 1,
          createdAt: new Date(),
        },
      ])
    );

    // Translate user's message from Sinhala to English
    const translatedMessage = await translate(userMessage.text, { to: 'en' });

    try {
      const response = await fetch(
        'https://23ad-223-224-1-6.ngrok.io/webhooks/rest/webhook',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          credentials: 'same-origin',
          body: JSON.stringify({ message: translatedMessage.text }),
        }
      );

      const data = await response.json();
      if (data && data.length > 0) {
        const botMessages = [];
        for (const botResponse of data) {
          if (botResponse.text) {
            const botMessage = {
              _id: messages.length + botMessages.length + 2,
              text: botResponse.text,
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'Bot',
                avatar: 'https://placeimg.com/140/140/any',
              },
            };
            botMessages.push(botMessage);
          }
        }

        // Translate the bot's responses from English to Sinhala
        const translatedResponses = await Promise.all(
          botMessages.map(async (botMsg) => {
            const translatedResponse = await translate(botMsg.text, { to: 'si' });
            return { ...botMsg, text: translatedResponse.text };
          })
        );

        // Display bot's responses
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, translatedResponses)
        );
      }
    } catch (error) {
      console.error('Error communicating with Rasa:', error);
    }
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#1976D2',
          },
          left: {
            backgroundColor: '#fff',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name='angle-double-down' size={22} color='#333' />;
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

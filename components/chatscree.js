import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const sendMessageToRasa = async (message) => {
    try {
      console.log(message);
      const response = await fetch(
        'https://4176-223-224-1-6.ngrok.io/webhooks/rest/webhook',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
          },
          credentials: 'same-origin',
          body: JSON.stringify({ message: message.text }),
        }
      );

      const data = await response.json();
      if (data && data.length > 0) {
        const botMessages = data.map((responseData) => ({
          _id: Math.random().toString(36).substring(7),
          text: responseData.text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Bot',
            avatar: 'https://placeimg.com/140/140/any',
          },
        }));

        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, botMessages)
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

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{ marginBottom: 5, marginRight: 5 }}
            size={32}
            color="#1976D2"
          />
        </View>
      </Send>
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => {
        onSend(messages);
        sendMessageToRasa(messages[0]);
      }}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
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

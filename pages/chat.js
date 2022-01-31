import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React, { useState } from "react";
import appConfig from "../config.json";

export default function ChatPage() {
  const handleNewMsg = (newMsg) => {
      const msgObject ={
        id: msgArray.length,
        from: 'User1',

        text: newMsg 
      }
    setMsgArray([msgObject, ...msgArray]);
    setMsg("");
  };

  const [msg, setMsg] = useState("");
  const [msgArray, setMsgArray] = useState([]);
  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          {/*{msgArray.map((currentMsg) => {
            //console.log(currentMsg)
            return <li key={currentMsg.id}>{currentMsg.from}: {currentMsg.text}</li>;
          })}*/}
          <MessageList messages={msgArray} />

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={msg}
              onChange={(event) => {
                setMsg(event.target.value);
              }}
              onKeyPress={(button) => {
                if (button.key === "Enter") {
                  button.preventDefault();
                  //console.log(button.key);
                  if(msg.length!=0){
                    handleNewMsg(msg);
                  }
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "90%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <Button
              type="submit"
              label="Enviar"
              onClick={(click)=>{
                click.preventDefault();
                if(msg.length!=0){
                  handleNewMsg(msg);
                }
                
              }}
             
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: "#fd7702",
                mainColorLight: "#ff8e00",
                mainColorStrong: "#ff5003",
                
              }}
              styleSheet={{
                height: "40px",
                bottom: "5px"
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}

function MessageList(props) {
  //console.log("MessageList", props);
  return (
    <Box
      tag="hidden"
      styleSheet={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
        {props.messages.map((msg)=>{
            return(
                <Text
                key={msg.id}
                tag="li"
                styleSheet={{
                  borderRadius: "5px",
                  padding: "6px",
                  marginBottom: "12px",
                  hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                  },
                  
                }}
              >
                <Box
                  styleSheet={{
                    marginBottom: "8px",
                    
                  }}
                >
                  <Image
                    styleSheet={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "8px",
                    }}
                    src={`glados.png`}
                  />
                  <Text tag="strong">{msg.from}</Text>
                  <Text
                    styleSheet={{
                      fontSize: "10px",
                      marginLeft: "8px",
                      color: appConfig.theme.colors.neutrals[300],
                    }}
                    tag="span"
                  >
                    {new Date().toLocaleDateString()}
                  </Text>
                  {/*<Image
                    onClick={()=>{
                      console.log("clicou");
                    }}
                    styleSheet={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginLeft: "8px",
                    }}
                    src={`bin.png`}
                  />*/}
                </Box>
                {msg.text}
              </Text>
              
            )
            
           
        })}
      
    </Box>
  );
}

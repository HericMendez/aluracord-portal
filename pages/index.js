
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import { useRouter } from 'next/router';
import appConfig from "../config.json";
import {useState} from "react";



const Title = (props) => {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["100"]};
          font-size: 22px;
        }
      `}</style>
    </>
  );
};
/*
const HomePage = () => {
  return (
    <div>
    <GlobalStyles />
      <Title tag="h1">Aperture Science Labs</Title>
      <h1>So, how are you holdin' up?</h1>
      <h2>Because i am a POTATO!</h2>
    </div>
  );
};

export default HomePage;
*/

export default function PaginaInicial() {
  //const username = "GLaDOS";
  const [username, setUsername] = useState();
  const router = useRouter();
  return (
    <>

      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          //backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: `url(cake.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 70%)",
            backgroundColor: "rgba(52, 52, 52, 0.8)",
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={(event)=>{
              event.preventDefault();
              console.log("submitted!");
              router.push('/chat')
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Title tag="h2">
              Welcome to the Aperture Science Enrichment Center!
            </Title>

            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>
            {/*<input
              type="text"
              
              onChange={(event) => {
                const userinput = event.target.value;
                console.log(userinput);
                setUsername(userinput)
              }}
            ></input>*/}
            <TextField         
                 fullWidth
                 value={username}
                 onChange={(event) => {
                  const input = event.target.value;
                  //console.log(userinput);
                  setUsername(input)
                }}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: "#fd7702",
                mainColorLight: "#ff8e00",
                mainColorStrong: "#ff5003",
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[700],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}

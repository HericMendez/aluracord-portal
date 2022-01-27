export default function validUsername(user){
    if(user.length <3){
      return {
        valid:false,
        username: "",
        link: "",
        src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.pnguser.png"

      }
    } else{
      return {
        valid:true,
        username: user,
        link: "",
        src: "",

      }
    }
  }
import Header from "./components/header";
import Reply from "./components/reply";
import Messages from "pages/inbox/chat/components/messages";
import { useState } from "react";

export default function Chat() {
  const user = {
    name: "Eray Asma",
    avatar:
      "https://pbs.twimg.com/profile_images/1391038704110669830/POQDXK0Y_400x400.jpg",
  };

  const [messages, setMessages] = useState([
    {
      from: {
        id: "sGlyxKRERQhBZAP6jwtZBXKINqT2",
        name: "Eray Asma",
        username: "erayasma",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/e/e5/Electronic_Arts_Logo_2020.png",
      },
      message: "test",
    },
    {
      from: {
        id: "sGlyxKRERQhBZAP6jwtZBXKINqT2",
        name: "Eray Asma",
        username: "erayasma",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/e/e5/Electronic_Arts_Logo_2020.png",
      },
      message: "deneme",
    },
    {
      from: {
        id: "sGlyxKRERQhBZAP6jwtZBXKINqT2",
        name: "Eray Asma",
        username: "erayasma",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/e/e5/Electronic_Arts_Logo_2020.png",
      },
      message: "1",
    },
    {
      from: {
        id: "sGlyxKRERQhBZAP6jwtZBXKINqT2",
        name: "Eray Asma",
        username: "erayasma",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/e/e5/Electronic_Arts_Logo_2020.png",
      },
      message: "2",
    },
    {
      from: {
        id: "sGlyxKRERQhBZAP6jwtZBXKINqT2",
        name: "Eray Asma",
        username: "erayasma",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/e/e5/Electronic_Arts_Logo_2020.png",
      },
      message: "3",
    },
    {
      from: {
        id: "sGlyxKRERQhBZAP6jwtZBXKINqT2",
        name: "Eray Asma",
        username: "erayasma",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/e/e5/Electronic_Arts_Logo_2020.png",
      },
      message: "Şov başlasınnn 😂",
    },

    {
      from: {
        id: "3KaAmVpoUDWwyF5GqQsatLqHHeg2",
        name: "Eray Asma",
        username: "erayasmaa",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
      },
      message: "eray_asma61",
    },
    {
      from: {
        id: "3KaAmVpoUDWwyF5GqQsatLqHHeg2",
        name: "Eray Asma",
        username: "erayasmaa",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png",
      },
      message: "https://www.youtube.com/channel/UCoETqwzuc_8_G-1oE5CC2BA",
    },
    {
      from: {
        id: "3KaAmVpoUDWwyF5GqQsatLqHHeg2",
        name: "Eray Asma",
        username: "erayasmaa",
        avatar:
          "https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ=w240-h480-rw",
      },
      message: "https://discord.com/channels/@me",
    },
    {
      from: {
        id: "3KaAmVpoUDWwyF5GqQsatLqHHeg2",
        name: "Eray Asma",
        username: "erayasmaa",
        avatar:
          "https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw",
      },
      message: "https://www.linkedin.com/in/eray-asma-a59a41262/",
    },
    {
      from: {
        id: "3KaAmVpoUDWwyF5GqQsatLqHHeg2",
        name: "Eray Asma",
        username: "erayasmaa",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1200px-Font_Awesome_5_brands_github.svg.png",
      },
      message: "https://github.com/iameray",
    },
    {
      from: {
        id: "3KaAmVpoUDWwyF5GqQsatLqHHeg2",
        name: "Eray Asma",
        username: "erayasmaa",
        avatar:
          "https://store-images.s-microsoft.com/image/apps.45406.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2a88a418-b96d-44a6-ad4f-5e0ee6289b2c",
      },
      message: "https://twitter.com/d1zzy_pm",
    },
    {
      from: {
        id: "3KaAmVpoUDWwyF5GqQsatLqHHeg2",
        name: "Eray Asma",
        username: "erayasmaa",
        avatar:
          "data:image/jpeg;base64,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",
      },
      message: "Bu kısımda çok zorlandığım için düzeltemedim. Normalde kırmızı EA profili konuşmanın sağ tarafında olmalı ve profili olmamalı ama yapamdığım için böyle kaldı.Üstteki hesaplardan takip ederseniz sevinirim 😇",
    },
  ]);

  return (
    <div className="flex-1">
      <Header user={user} />
      <Messages messages={messages} />
      <Reply setMessages={setMessages} />
    </div>
  );
}

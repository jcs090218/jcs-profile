---
title: "專案"
ShowReadingTime: false
---

本頁面展示了我的一些個人、職業和學術項目。這些項目的大部分源代碼以及其他項目都可以在我的 [GitHub][github/jcs090218] 和 [GitLab][gitlab/jcs090218] 帳戶中找到。

除非另有說明，否則我所有的開源專案都會根據需要進行維護。以下日期表示大部分主要開發工作完成的時間。

- <span aria-label="專業工作" data-balloon-pos="up">💸</span> = 專業工作
- <span aria-label="學校作業" data-balloon-pos="up">🏫</span> = 學校作業
- <span aria-label="職稱" data-balloon-pos="up">👨‍💼</span> = 在團隊的角色
- <span aria-label="維護者" data-balloon-pos="up">👷</span> = 維護者
- <span aria-label="貢獻者" data-balloon-pos="up">✨</span> = 貢獻者
- <span aria-label="分支項目" data-balloon-pos="up">🔗</span> = 分支項目 （非原作者）
- <span aria-label="獎勵或成就" data-balloon-pos="up">🏅</span> = 獎勵或成就
- <span aria-label="成人內容" data-balloon-pos="up">🔞</span> = 成人內容

📢 您可以將鼠標懸停在這些 **表情符號** 上，查看詳細說明！

請使用 <kbd>Ctrl</kbd>+<kbd>f</kbd> 來搜尋項目清單。

---

### 🚧 目前正在製作

<details class="my-details" open>
  <summary>詳細資訊</summary>

- [Untitled: ASAKU](#) (春 2025 – 現在<span aria-label="程式領導"
data-balloon-pos="up">👨‍💼</span><span aria-label="專業工作"
data-balloon-pos="up">💸</span>):
這是一款回合制 [MOBA][]，由六人團隊與台灣漫畫創作者 [MingKun Liu][] 的漫畫 [ASAKU][] 合作開發。
本遊戲的特色為策略性多人對戰，例如 3v3、4v4 和 5v5，並採用漫畫中的角色和主題。
遊戲以 [Unity][] 製作，在使用 [LiteNetLib][] 的初始原型後，客戶端和伺服器網路都使用 [FishNet][]。
我負責開發客戶端和伺服器系統。
- [Untitled: CODE_E](#) (冬 2024 – 現在<span aria-label="程式領導"
data-balloon-pos="up">👨‍💼</span><span aria-label="專業工作"
data-balloon-pos="up">💸</span>): 遊戲製作中.
- [cl-qob/packaging][] (冬 2024 – 現在):
為 [Qob CLI][cl-qob/cli] 進行封裝。
- [Qob][] or [cl-qob/cli][] (秋 2024 – 現在 <span aria-label="發佈至 Debian (2)"
data-balloon-pos="up">🏅</span><span aria-label="發佈至 Homebrew (2)"
data-balloon-pos="up">🏅</span><span aria-label="發佈至 Chocolatey (2)"
data-balloon-pos="up">🏅</span><span aria-label="發佈至 Scoop (2)"
data-balloon-pos="up">🏅</span>):
[CLI][] 用於建立、執行、測試和管理您的 [Common Lisp][] 相依性。
- [cogru][] (夏 2024 – 現在):
協作從哪裡開始！？我在 [Rust][] 中使用 [client-server model][] 實作了 [Operational Transformation (OT)][]。
- [dotfiles](https://github.com/jcs090218/dotfiles) (夏 2024 – 現在):
人傑的 dotfiles。
- [jayces][] (冬 2023 – 現在): 我創建的編程語言，主要是為了學習寫的。

</details>


### 🧰 工具、架構和程式庫

<details class="my-details">
  <summary>詳細資訊</summary>

- [JCSNetP][] (冬 2017):
使用 [C++][]，開發了一個框架來提高網路程式設計的效率。
- [JCSQtJ][] (秋 2017):
一個封裝了 [Qt Jami][] 以加速開發的精簡框架。探索使用此框架的其他專案，例如 [Guild-Emblem-Simulator][]、[OC_Install][] 等。
- [JCSNetS][] (夏 2017):
專為製作 [MMO][] 遊戲量身打造的專用網路架構，利用 [Apache Mina][] 和 [MySQL][]。請查看使用此框架的專案 [BB_Shoot][]。
- [JCSPyGm_Lib][] (冬 2016 <span aria-label="學校作業"
data-balloon-pos="up">🏫</span>):
一套專為使用 [Pygame][] 提升遊戲開發速度而設計的工具。請造訪示範專案 [ImpulseEngine][] 以取得更詳細的使用資訊。 (6週；包含示範專案)
- [JCSCos2x_Lib][] (秋 2016 – 冬 2016 <span aria-label="學校作業"
data-balloon-pos="up">🏫</span>):
這個小型函式庫為視差效果提供了快速、表面、易於實作的層次，以及使用 [Cocos2d-x][] 製作 2D 遊戲的基本功能。
觀看示範專案的短片 [這裡](https://www.youtube.com/watch?v=SMMtxSFFqgo)。 (4 週；包括示範專案)
- [JCSLOVELua][] (秋 2016 – 冬 2016 <span aria-label="學校作業"
data-balloon-pos="up">🏫</span>):
一個建構在 [LÖVE][] 2D 引擎上的遊戲框架，透過提供預先實作的常用系統 (動畫、攝影機、輸入、渲染、簡單物理等)，
提升生產力與使用者體驗。請參閱示範專案 [PetShop][] 以取得更詳細的使用資訊。
(5 weeks; including the demo project)
- [JCSCC_Engine][] (春 2016 – 冬 2017 <span aria-label="學校作業"
data-balloon-pos="up">🏫</span>):
遊戲引擎提供直接的程式介面，用於開發跨平台原生程式碼遊戲。它包括一個具有安全解碼和編碼演算法的資源管理器。
本專案的目標是深入了解遊戲引擎的建構、瞭解其架構，並將這些知識應用於其他現代遊戲引擎。
- [JCSStarling][] (春 2015):
這是分層在 [Starling][] 框架之上的程式介面，將事件驅動系統轉換成元件驅動系統。

</details>

### <div class="simpleicons" id="si-unity"></div> Unity

<details class="my-details" open>
  <summary>詳細資訊</summary>

- [HTTP_Server](https://github.com/jcs090218/Unity.HTTP_Server) (春 2025):
A simple [C#][] [HTTP][] server implementation for [Unity][].
- [Prefs](https://github.com/jcs090218/Unity.Prefs) (秋 2023):
A small library designed to fetch a list of [EditorPrefs][]/[PlayerPrefs][].
- [Mx][Unity.Mx] (秋 2023):
A command-based completion framework. It allows you to execute all kinds of tasks based on your design.
The idea is to port the [M-x](https://www.gnu.org/software/emacs/manual/html_node/emacs/M_002dx.html) functionality from [Emacs][].
- [NovBundle](https://assetstore.unity.com/packages/tools/utilities/novbundle-201440) (秋 2021 – 春 2022 <span aria-label="專業工作"
data-balloon-pos="up">💸</span><span aria-label="發佈至 Unity Asset Store (7)"
data-balloon-pos="up">🏅</span>):
An abstraction layer constructed atop the [AssetBundles][] system, aiming to streamline the [AssetBundles][] workflow, sparing users from delving into intricate system details.
- [WatchLog](https://gitlab.com/pixisoft/UnityAS/WatchLog) (夏 2021 – 秋 2021 <span aria-label="專業工作"
data-balloon-pos="up">💸</span><span aria-label="發佈至 Unity Asset Store (6)"
data-balloon-pos="up">🏅</span>):
A dedicated tool that tracks variable over time.
- [Inspect Yaml](https://assetstore.unity.com/packages/tools/visual-scripting/inspect-yaml-197811) (夏 2021 <span aria-label="專業工作"
data-balloon-pos="up">💸</span><span aria-label="發佈至 Unity Asset Store (5)"
data-balloon-pos="up">🏅</span>):
A dedicated and up to date [YAML][] editor inside the [Inspector][InspectorWindow] window.
- [Inspect Xml](https://assetstore.unity.com/publishers/54455) (夏 2021 <span aria-label="專業工作"
data-balloon-pos="up">💸</span><span aria-label="發佈至 Unity Asset Store (4)"
data-balloon-pos="up">🏅</span>):
A dedicated and up to date [XML][] editor inside the [Inspector][InspectorWindow] window.
- [Inspect Json](https://assetstore.unity.com/packages/tools/visual-scripting/inspect-json-197543) (夏 2021 <span aria-label="專業工作"
data-balloon-pos="up">💸</span><span aria-label="發佈至 Unity Asset Store (3)"
data-balloon-pos="up">🏅</span>):
A dedicated and up to date [JSON][] editor inside the [Inspector][InspectorWindow] window.
- [Afterimage](https://assetstore.unity.com/packages/vfx/afterimage-197173) (夏 2021 <span aria-label="專業工作"
data-balloon-pos="up">💸</span><span aria-label="發佈至 Unity Asset Store (2)"
data-balloon-pos="up">🏅</span>):
Afterimage VFX for [Unity][].
A simple solution that work with 2D and 3D renderers, including UI components (Image, Text, Button, etc).
- [sHierarchy](https://assetstore.unity.com/packages/tools/utilities/shierarchy-197171) (夏 2021 <span aria-label="專業工作"
data-balloon-pos="up">💸</span><span aria-label="發佈至 Unity Asset Store (1)"
data-balloon-pos="up">🏅</span>):
Minimalistic good looking [hierarchy][HierarchyWindow].
- [UnityWzLib](https://github.com/MapleStoryUnity/UnityWzLib) (夏 2021):
[WzLib](https://mapleref.fandom.com/wiki/WZ#:~:text=The%20WZ%20format%20is%20what,t%20too%20hard%20to%20parse.) for [Unity][].
- [32feet.Unity.Example](https://gitlab.com/jcs-workspace/bluetooth/32feet.Unity.Example) (春 2021):
Example project to use [32feet][] inside [Unity][] ([Bluetooth][] Classic).
- [Unity.Lua](https://github.com/jcs090218/Unity.Lua) (春 2020 <span aria-label="專業工作"
data-balloon-pos="up">💸</span>):
Use Lua scripting language ([tolua](https://github.com/topameng/tolua)) in [Unity][] to accomplish hot update/fix functionality.
- [UndoRedoSystem](https://github.com/jcs090218/Unity.UndoRedoSystem) (夏 2018):
Implementation of an Undo-Redo system in [Unity][] using [C#][] and uGUI.
- [Unity.Toggle](https://github.com/jcs090218/Unity.Toggle) (夏 2018):
A little bit overkill toggle button UI for [Unity][] Engine using uGUI.
- [PackageExporter](https://github.com/jcs090218/PackageExporter) (冬 2017):
An alternative approach to package management utilizing ignore files.
- [TileEditor](https://gitlab.com/jcs-workspace/unity/TileEditor) (秋 2017 – 冬 2017):
Light-weight tile editing tool for [Unity][] 2D/3D.
- [JCSUnity](https://github.com/jcs090218/JCSUnity) (夏 2016 – 冬 2017):
Quickly construct your game using multiple components and predefined default settings.

#### 📐 演算法

- [AI_Link](https://www.youtube.com/watch?v=I8QsEB3IYI0) (冬 2024 – 春 2025):
This project specifically addresses the limitations of the [NavMesh Link][] by replacing the original with a custom system.
- [2D_Visibility](https://gitlab.com/jcs-workspace/unity/2D_Visibility) (夏 2024):
Implementation of [2D Visibility](https://www.redblobgames.com/articles/visibility/) in [Unity][] using [C#][].
- [AStar](https://gitlab.com/jcs-workspace/unity/AStar) (夏 2023):
Implementation of [A-star](https://en.wikipedia.org/wiki/A*_search_algorithm) in [Unity][] using [C#][].

#### 🖌️ 動畫、著色器和 VFX

- [VideoTransition](https://youtu.be/tBDzRrHUKqc) (夏 2024 – 春 2025 <span aria-label="專業工作"
data-balloon-pos="up">💸</span>):
Use video transition to do scene transition.
The original author is my co-worker [@hirosaga][gitlab/hirosaga] created the video transition mask effect
and being used in our game [長姬記][].
- [Grass_Sway](https://gitlab.com/jcs-workspace/unity/Grass_Sway) (夏 2023):
Create a grass sway effect in [Unity][] using [Shader Graph][] with [Universal Render Pipeline (URP)][URP].
- [Better_Skybox](https://gitlab.com/jcs-workspace/unity/Better_Skybox) (夏 2023):
Enhance the overall visual experience by adjusting various settings in [Unity][].

</details>

### 🎮 遊戲

<details class="my-details">
  <summary>詳細資訊</summary>

- [長姬記](#) (夏 2024 – 夏 2025 <span aria-label="Programming Lead"
data-balloon-pos="up">👨‍💼</span><span aria-label="專業工作"
data-balloon-pos="up">💸</span><span aria-label="成人內容"
data-balloon-pos="up">🔞</span>):
A 2D erotic game featuring turn-based combat and adventure-driven storytelling.
Developed by [Bunny Eats Tiger][] with a core team of three members,
the game is funded and set to be published by [Mango Party][].
- [You Have An Order](https://jcs090218.itch.io/you-have-an-order) (夏 2024 <span aria-label="Programming Lead"
data-balloon-pos="up">👨‍💼</span>):
A 2D pixel horror game, players strive to evade monsters while searching for an escape route.
This game participates in the [机核GCORES][] [2024 Game Creation Challenge](https://site.gcores.com/booom2024/). (3 weeks)
- [Alice in Surprise](https://kuhhenry.itch.io/alice-in-surprise) (夏 2022 <span aria-label="Programming Lead"
data-balloon-pos="up">👨‍💼</span>):
A mini-game that combines the mechanics of [hack and slash][hack & slash] with [tile-matching][].
The game has been submitted to the [5th DIY Game Jam](https://itch.io/jam/20220829). (4 weeks)
- [Pipeline Of Emperor Yu](https://www.jcs-profile.com/public/links/Links_PipelineOfEmperorYu/) (秋 2019 – 冬 2019 <span aria-label="Chief Technology Officer (CTO)"
data-balloon-pos="up">👨‍💼</span><span aria-label="專業工作"
data-balloon-pos="up">💸</span><span aria-label="Published on Steam (1)"
data-balloon-pos="up">🏅</span><span aria-label="Published on Google Play Store (3)"
data-balloon-pos="up">🏅</span><span aria-label="Published on App Store (1)"
data-balloon-pos="up">🏅</span>):
A puzzle game that merges historical legends with the classic gameplay of water pipe challenges!
- [Poker](https://youtu.be/WYwpSqk1nwQ) (秋 2019 <span aria-label="專業工作"
data-balloon-pos="up">💸</span>):
An online gambling game featuring a total of 5 mini-games.
Our team consists of 7 members, and I am one of the game client engineers working with the [Unity][] engine.
I am fully responsible for developing the entire gameplay system, while the UI is created by my senior coworker.
Unfortunately, the entire team got laid off, leaving the game unfinished. (8 weeks)
- [Greedy Island](https://andysze79.wixsite.com/kuma/copy-of-recall-1) (秋 2018 – 夏 2019 <span aria-label="專業工作"
data-balloon-pos="up">💸</span>):
A multiplayer shooting [MOBA][] game on the mobile device.
The project is created by the [T-NEXUS][] studio.
I contributed to the backend engineering by writing the login server and designing its database schema.
- [Sugar Sleuths](https://mwgamedesign.itch.io/sugar-sleuths) (秋 2017 – 冬 2017 <span aria-label="Programming Lead"
data-balloon-pos="up">👨‍💼</span><span aria-label="學校作業"
data-balloon-pos="up">🏫</span><span aria-label="Presented at Game Developers Conference (GDC) 2018 on behalf of our school, the Academy of Art University."
data-balloon-pos="up">🏅</span><span aria-label="Presented at E3 College Game Competition (E3 CGC) 2018 on behalf of our school, the Academy of Art University."
data-balloon-pos="up">🏅</span>):
A mulitplayer, hot-seat game in which the campers (players) discover clues that point to the Master Candy Thief.
- [BB_Shoot][] (秋 2017):
A bullet bounce game featuring multiplayer [third-person shooter (TPS)][TPS] mechanics.
- [Hemlock and the Horrible Net](https://apkcombo.com/hemlock-and-the-horrible-net/com.aau.jcs/) (春 2017 – 夏 2017 <span aria-label="Programming Lead"
data-balloon-pos="up">👨‍💼</span><span aria-label="學校作業"
data-balloon-pos="up">🏫</span><span aria-label="Published on Google Play Store (2)"
data-balloon-pos="up">🏅</span><span aria-label="The company Hasbro is interested in investing in this game."
data-balloon-pos="up">💸</span>):
Embark on an undersea adventure in this side-scrolling game! (15 weeks)
- [PetShop][] (冬 2016 <span aria-label="學校作業"
data-balloon-pos="up">🏫</span>):
An example project using [JCSLOVELua][] Framework.
Players can use a left-click of the mouse to generate adorable animals, allowing them to reside within a sandbox.
The concept is to emulate an aquarium experience.
- [Might & Blade](https://www.youtube.com/watch?v=vPapMMxzNGg) (秋 2016 – 冬 2016 <span aria-label="Programming Lead"
data-balloon-pos="up">👨‍💼</span><span aria-label="學校作業"
data-balloon-pos="up">🏫</span><span aria-label="Presented at GDC 2017 on behalf of our school, the Academy of Art University."
data-balloon-pos="up">🏅</span>):
A 3rd person hack and slash action game made in the [Unity][] engine, developed by a team of 18 in
the [Academy of Art University][AAU]. (15 weeks)
- [Radiant Rune Fist](https://youtu.be/OQqqgbf0mGI) (秋 2016 – 冬 2016 <span aria-label="Programmer"
data-balloon-pos="up">👨‍💼</span><span aria-label="學校作業"
data-balloon-pos="up">🏫</span>):
A run and gun platforming game from Old Gods Game Studio. Battle for glory and against evil!
Made in the [Unity][] engine, developed by a team of 8 in the [Academy of Art University][]. (15 weeks)
- [DJMax_Remake](https://github.com/jcs090218/DJMax_Remake) (春 2016 <span data-balloon-pos="up" aria-label="學校作業">🏫</span>):
A clone of [DJMax][] implemented in [Processing][].
- [TPS](https://gitlab.com/artugam-jcs/tps) (秋 2015 – 冬 2015 <span data-balloon-pos="up" aria-label="學校作業">🏫</span>):
A simple [ASCII][] [third-person shooter (TPS)][TPS] game coded in [C++][].
View the gameplay video [here](https://www.youtube.com/watch?v=Y8Eu87fTARw).
- [Project M](#) (夏 2015 – 冬 2015 <span aria-label="Programming Lead"
data-balloon-pos="up">👨‍💼</span><span aria-label="專業工作"
data-balloon-pos="up">💸</span>):
Action game (ACT) with [RPG][] elements and a locked top-down perspective.
I worked on the [minimum viable product (MVP)][MVP] of a game under [NDA][] as the sole software engineer.
The game wasn't completed due to its 7+ years project timeline, so I passed it on to the next team.
- [Archers Duel](https://www.newgrounds.com/portal/view/650410) (冬 2014 <span aria-label="Programmer"
data-balloon-pos="up">👨‍💼</span><span aria-label="學校作業"
data-balloon-pos="up">🏫</span><span aria-label="Presented at Game Developers Conference (GDC) 2015 on behalf of our school, the Academy of Art University."
data-balloon-pos="up">🏅</span><span aria-label="Published on Newgrounds (1)"
data-balloon-pos="up">🏅</span>):
An compact RPG fighting game designed for two players to engage in battles using
pre-designed archer characters. Developed with the [Starling][] framework.
and [AS3](https://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/index.html). (7 weeks)
- [Cardinal](https://www.youtube.com/watch?v=wjHvvuWGqwE) (秋 2014 <span aria-label="Programmer"
data-balloon-pos="up">👨‍💼</span><span aria-label="學校作業"
data-balloon-pos="up">🏫</span><span aria-label="Presented at Game Developers Conference (GDC) 2015 on behalf of our school, the Academy of Art University."
data-balloon-pos="up">🏅</span>):
A compact visual novel game where the player assumes the role of a detective,
working to unravel a mystery and identify the murderer. (7 weeks)
- [Rhythm Punks!](https://www.youtube.com/watch?v=FmsYq4y_W24) (秋 2014 – 冬 2014 <span aria-label="Sole Programmer"
data-balloon-pos="up">👨‍💼</span><span data-balloon-pos="up" aria-label="學校作業">🏫</span>):
A competitive two player game that will have the player fighting one another for victory.
The first stage will be a death match between the two players, the second stage will have the players fighting enemies to see who can kill the most while dying the least.
The 3rd stage will be a boss fight, where the player who does the most damage wins. (14 weeks)

#### 外掛程式

- [moba-inting](https://gitlab.com/jcs-workspace/Python/moba-inting) (秋 2024):
A basic UI automation bot to avoid AFK penalties.
The bot ensures your character takes action (like intentionally moving) at regular intervals.

</details>

### 🖥️ 桌上型電腦應用程式

<details class="my-details">
  <summary>詳細資訊</summary>

- [OC_Install][] (夏 2018):
An univseral software installer by one click.
- [MagicCardTool](https://gitlab.com/artugam-jcs/MagicCardTool) (夏 2017 <span aria-label="學校作業"
data-balloon-pos="up">🏫</span>):
A small desktop application that generates an image of a card for the [Magic: The Gathering][] card game.
Initial attempt to develop a desktop application with [Windows Forms][] using [Visual C#][].
- [Guild-Emblem-Simulator][] (秋 2017):
A small program that allows you to customize your guild emblem just like in the game [MapleStory][] and export it into a [PNG][] file.
- [Skycrap Client/Server](https://www.youtube.com/watch?v=bwiOMgQ7xHU) (春 2017 – 夏 2017):
A small and enjoyable project that transmits webcam data using the server/client model.
Implemented in [Java][], this project utilizes the [Apache Mina][] framework.

</details>

### 🪞 AR/VR 行動應用程式

<details class="my-details">
  <summary>詳細資訊</summary>

- [Monumental Conversations](https://apps.apple.com/us/app/monumental-conversations/id1585909435) (夏 2021 – 春 2022 <span aria-label="Programmer"
data-balloon-pos="up">👨‍💼</span><span aria-label="專業工作"
data-balloon-pos="up">💸</span><span aria-label="This project was featured in CODAworx’s magazine’s Art for Social Change edition"
data-balloon-pos="up">🏅</span><span aria-label="Published on App Store (3)"
data-balloon-pos="up">🏅</span>):
An [augmented reality][AR] mobile app for learning history of [Monument Avenue](https://en.wikipedia.org/wiki/Monument_Avenue) and [Arthur Ashe Boulevard](https://en.wikipedia.org/wiki/Arthur_Ashe_Boulevard).
This project was featured in [CODAworx][]'s magazine's [Art for Social Change](https://www.codaworx.com/projects/monumental-conversations/) edition.
- [Lights & Delights](https://apps.apple.com/us/app/lights-delights/id1541283833) (冬 2020 – 春 2021 <span aria-label="Programmer"
data-balloon-pos="up">👨‍💼</span><span aria-label="專業工作"
data-balloon-pos="up">💸</span><span aria-label="Published on App Store (2)"
data-balloon-pos="up">🏅</span>):
An [augmented reality][AR] holiday adventure for the Downtown Seattle Association's 2020, Holiday Lights and Delights Festival.
- [Twilight Tower LiveVR](https://apkcombo.com/twilight-tower-livevr/com.AAU.TwilightTower/) (春 2015 <span aria-label="Sole Programmer"
data-balloon-pos="up">👨‍💼</span><span aria-label="學校作業"
data-balloon-pos="up">🏫</span><span aria-label="Published on Google Play Store (1)"
data-balloon-pos="up">🏅</span>):
A mini marker-based AR game, utilizing the [Vuforia AR SDK](https://www.ptc.com/en/products/vuforia)
within the [Unity](https://unity.com/) platform.
Players can interact with objects in the scene by simply clicking on them.

</details>

### 🎼 音樂應用程式

<details class="my-details">
  <summary>詳細資訊</summary>

- [Meteo](https://meteo.com.tw/app-download.html) (春 2020 – 春 2021 <span aria-label="Programmer"
data-balloon-pos="up">👨‍💼</span><span aria-label="專業工作"
data-balloon-pos="up">💸</span><span aria-label="Achieved a total of 812,970 USD on the 嘖嘖zeczec donation platform"
data-balloon-pos="up">🏅</span><span aria-label="Published on Google Play Store (4)"
data-balloon-pos="up">🏅</span><span aria-label="Published on App Store (4)"
data-balloon-pos="up">🏅</span>):
An app for sharing music that works with illuminated piano keyboards — [Meteo piano](https://www.youtube.com/watch?v=UbaO1bKhKWs).
You can view a demonstration of the core mechanics [here](https://www.youtube.com/watch?v=63iJ5pnfVLQ) (please note that this demo is in its early stages and may appear rough).
- [Music_Visualizer](https://gitlab.com/jcs-workspace/unity/Music_Visualizer) (秋 2018):
Implementation of a music visualizer in [Unity][]. Check out the demo [here](https://www.youtube.com/watch?v=BkKbOezO3Vs&t=158s).

</details>

### 📐 演算法

<details class="my-details">
  <summary>詳細資訊</summary>

#### 模糊匹配

- [FlxSwift][] (冬 2024 <span aria-label="Searchable on Swift Package Manager (1)"
data-balloon-pos="up">🏅</span>):
Rewrite [emacs-flx][] in [Swift][].
- [flx.go][] (冬 2024 <span aria-label="Searchable on Go.dev (1)"
data-balloon-pos="up">🏅</span>):
Rewrite [emacs-flx][] in [Go][].
- [flx.py][] (冬 2024 <span aria-label="發佈至 PyPi (1)"
data-balloon-pos="up">🏅</span>):
Rewrite [emacs-flx][] in [Python][].
- [flx_dart][] (冬 2024 <span aria-label="發佈至 Pub.dev (1)"
data-balloon-pos="up">🏅</span>):
Rewrite [emacs-flx][] in [Dart][].
- [clj-flx][] (冬 2024 <span aria-label="發佈至 Clojars (1)"
data-balloon-pos="up">🏅</span>):
Rewrite [emacs-flx][] in [Clojure][].
- [flx-java][] (冬 2024 <span aria-label="發佈至 Maven Central (1)"
data-balloon-pos="up">🏅</span>):
Rewrite [emacs-flx][] in [Java][].
- [cl-flx][] (秋 2024 <span aria-label="發佈至 Quicklisp (1)"
data-balloon-pos="up">🏅</span><span aria-label="發佈至 Ultralisp (1)"
data-balloon-pos="up">🏅</span>):
Rewrite [emacs-flx][] in [Common Lisp][].
- [flx-zig][] (春 2024):
Rewrite [emacs-flx][] in [Zig][].
- [zig-flx][] (春 2024):
[Zig][] bindings for [flx-c][].
- [flx-c][] (春 2024):
Rewrite [emacs-flx][] in [C][].
- [flx-ts][] (春 2024 <span aria-label="發佈至 NPM (8)"
data-balloon-pos="up">🏅</span>):
Rewrite [emacs-flx][] in [TypeScript][],  with added support for [JavaScript][].
- [FlxCs][] (秋 2023 <span aria-label="發佈至 NuGet (2)"
data-balloon-pos="up">🏅</span>):
Rewrite [emacs-flx][] in [C#][].
Built on the [Mono][] framework, you can utilize this in any environment compatible with [Mono][].
This is utilized within the [Unity.Mx][] tool.
- [flx-rs][the-flx/flx-rs] (冬 2021 <span aria-label="發佈至 crates.io (2)"
data-balloon-pos="up">🏅</span>):
Rewrite [emacs-flx][] in [Rust][] for dynamic modules.
The original [emacs-flx][] were written in pure [Emacs Lisp][].
While their scoring engine is impressive, the performance is unbearable on [Windows][] systems.
Therefore, this package was developed, leading to a speed increase ranging from 10x to 16x.
- [flxy-rs][] (冬 2021 <span aria-label="發佈至 crates.io (1)"
data-balloon-pos="up">🏅</span>):
Fast, character-based search library in [Rust][].
This represents my first attempt to rewrite [emacs-flx][] in [Rust][], which was not successful.
Although it remains usable, the results in terms of fuzzy matching were not as impressive as the original [emacs-flx][] algorithm.

</details>

### 🧲 物理

<details class="my-details">
  <summary>詳細資訊</summary>

- [ImpulseEngine][] (秋 2017 <span aria-label="學校作業"
data-balloon-pos="up">🏫</span>):
An unofficial port of [Impulse Engine][] written in [Python][].
This is constructed using [JCSPyGm_Lib][] layered on top of [Pygame][].

</details>

### 🌐 網路應用程式與服務

<details class="my-details">
  <summary>詳細資訊</summary>

- [JCS-EMACS Homepage](https://jcs-emacs.github.io/) (春 2022):
Landing page for [jcs-emacs][]. This webiste is made using [React.js][].
- [JCS-ELPA Homepage](https://jcs-emacs.github.io/jcs-elpa/) (冬 2021):
A homepage for [JCS-ELPA][] designed to showcase all packages in the archive.
The site only consists of basic [HTML][], [CSS][] and [JavaScript][].
- [Pixisoft Website](https://pixisoft.gitlab.io/) (夏 2021 – 冬 2021 <span aria-label="專業工作"
data-balloon-pos="up">💸</span>):
A small web application made using [React.js][], designed for use as a company's homepage.
- [sherlock-web](https://jcs-profile.com/public/sherlock-web/) (春 2021):
Website to interact [Sherlock API][sherlock-project/api].
- [sherlock-project/api](https://github.com/sherlock-project/api) (春 2021):
API for the [sherlock][sherlock-project/sherlock] module implemented in Python using [Django REST Framework (DRF)][DRF].
Initial attempt with [DRF][].
- [box_server](https://gitlab.com/jcs-workspace/node.js/box_server) (春 2020 <span aria-label="專業工作"
data-balloon-pos="up">💸</span>):
A straightforward server designed to be compatible with any [WebSocket][] client utilizing the [ws][] library.
This is a small demo I developed while working at [WISBET][]. There is no documentation as we moved on to the next project afterward.
- [Unity.DataServer](https://gitlab.com/jcs-workspace/unity/Unity.DataServer) (冬 2019 <span aria-label="專業工作"
data-balloon-pos="up">💸</span>):
A data server and a solution for the missing game data, including [in-app purchase (IAP)][IAP] history, when the game is uninstalled from a mobile device.
- [sherlock][sherlock-project/sherlock] (春 2019 <span aria-label="貢獻者"
data-balloon-pos="up">✨</span>):
🔎 Hunt down social media accounts by username across social networks.
I was one of the early contributors who took care of the ANSI color using [colorama][].
- [Links_Template](https://github.com/jcs090218/Links_Template) (春 2020):
Rapidly build your link page to marketing your games!
- [RandomCookMenu](https://gitlab.com/jcs-workspace/php/RandomCookMenu) (冬 2017):
A small application that enables you to create cooking menus and randomly selects one for you.
This was originally designed for my mom, who often struggled with deciding what to cook every day.
- [MapleStory Survival Kit](https://jcs-profile.com/public/AAU/wnm249/m15/wnm249_final/) (夏 2017 <span aria-label="學校作業"
data-balloon-pos="up">🏫</span>):
A website that guides you on navigating the popular [MMO][][RPG][], [MapleStory][]!
Constructed using only fundamental [HTML][], [CSS][], and [JavaScript][], this is the final project from our first web design class at the [Academy of Art University][].
- [Best Boba Tea](https://jcs-profile.com/public/AAU/wnm249/m7/wnm249_midterm/) (夏 2017 <span aria-label="學校作業"
data-balloon-pos="up">🏫</span>):
A website recommends a few boba tea places in San Francisco!
Constructed using only fundamental [HTML][], [CSS][], and [JavaScript][], this is the midterm project from our first web design class at the [Academy of Art University][].

#### 👤 部落格與個人網站

- [jcs-profile][] (春 2024):
My personal website version 2, using [Hugo][] and [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.
- [blog@v2](https://github.com/jcs-legacy/blog) (秋 2022 – 春 2024):
My personal blog site, built using [Hugo][] with [LoveIt](https://github.com/dillonzq/LoveIt) theme.
- [blog@v1](https://github.com/jcs090218/blog/tree/v1) (秋 2021 – 秋 2022):
My personal blog site, built using [Hexo][] with [hipaper](https://github.com/iTimeTraveler/hexo-theme-hipaper) theme.
- [jcs-profile@v1](https://github.com/jcs090218/jcs-profile/tree/v1) (冬 2018 – 春 2024):
My single page personal website implemented in basic [HTML][], [CSS][] and [JavaScript][]
- [Blog_JenChieh](https://github.com/jcs-legacy/Blog_JenChieh) (冬 2018 – 冬 2020):
The blog system I initiated during my university years was constructed using the [Blog_Template][].
I later shifted to a Static Site Generator (SSG) solution to minimize my server costs.
- [Blog_Template][] (冬 2018):
A blog template that allows individuals to self-host their blogs!
Constructed using [Node.js][] and [Express.js][]. (replaced with [SiraDoc][])

#### 📚 文件和手冊

- [Qob Manual][Qob] (秋 2024 — 冬 2024):
[Qob][cl-qob/cli]'s documentation website.
- [collaboration-server-protocol][CSP] (夏 2024 — 秋 2024):
Defines a common protocol for collaboration servers.
Built with [docsy](https://www.docsy.dev/).
- [Scripting_Manual_JCSGodot](https://github.com/jcs-legacy/Scripting_Manual_JCSGodot) (冬 2023):
Scripting manual website for [JCSGodot][] [API][].
- [Eask Manual][Eask] (夏 2022 – 冬 2022):
[Eask][emacs-eask/cli]'s documentation website.
- [CCosQuick Manual](https://jcs090218.github.io/CCosQuick/) (秋 2021):
The documentation website for my game framework — [CCosQuick][].
- [JCSEgret Manual](https://jcs090218.github.io/JCSEgret/) (秋 2021):
The documentation website for my game framework — [JCSEgret][].
- [JCSUE Manual](https://jcs090218.github.io/JCSUE/) (秋 2021):
The documentation website for my game framework — [JCSUE][].
- [JCSUnity Manual](https://jcs090218.github.io/JCSUnity/) (秋 2021):
The documentation website for my game framework — [JCSUnity][].
- [SiraDoc/demo](https://gitlab.com/SiraDoc/demo) (秋 2021):
Demo website for [SiraDoc][].
- [Scripting_Manual_JCSUE](https://github.com/jcs-legacy/Scripting_Manual_JCSUE) (夏 2020):
Scripting manual for [JCSUE][] [API][].
- [Scripting_Manual_CCosQuick](https://github.com/jcs-legacy/Scripting_Manual_CCosQuick) (春 2020):
Scripting manual for [CCosQuick][] [API][].
- [Scripting_Manual_JCSEgret](https://github.com/jcs-legacy/Scripting_Manual_JCSEgret) (冬 2018):
Scripting manual website for [JCSEgret][] [API][].
- [API_Reference_Template][] (冬 2018):
Simple API references webiste hoster. (replaced with [SiraDoc][])
- [Scripting_Manual_JCSUnity](https://github.com/jcs-legacy/Scripting_Manual_JCSUnity) (秋 2018):
Scripting manual for [JCSUnity][] [API][].
Later separated into [API_Reference_Template][] and subsequently reliant on it.

</details>

### 🔎 瀏覽器擴充套件

<details class="my-details">
  <summary>詳細資訊</summary>

- [password-toggle](https://github.com/jcs-chromews/password-toggle) (夏 2024):
Show/Hide passwords on the page.
- [eyny-video-downloader](https://github.com/jcs-chromews/eyny-video-downloader) (春 2024):
An extension that integrates a download button for [EYNY Video][] site.
- [browser-statistic](https://github.com/jcs-chromews/browser-statistic) (春 2024):
This is a small extension that presents statistical charts indicating the websites you frequently visit.

</details>

### 📦 套件管理員與建置工具

<details class="my-details">
  <summary>詳細資訊</summary>

- [emacs-eask/packaging][] (秋 2023 – 冬 2023):
Packaging for [Eask CLI][emacs-eask/cli].
I've actively contributed to diverse package managers such as [Chocolatey][], [Snapcraft][], [MacPorts][], etc.
Furthermore, I've established my own package repositories for [Scoop][], [Homebrew][], [Personal Package Archive (PPA)][PPA], and more.
- [emacs-eask/archives][] (春 2022 – 冬 2023):
Back up the `archive-contents` to avoid potential failures when refreshing the package archive.
This is a factor that enhances the stability of [Eask][emacs-eask/cli].
- [Eask][emacs-eask/cli] or [emacs-eask/cli][] (春 2022 – 冬 2023 <span aria-label="發佈至 NPM (6)"
data-balloon-pos="up">🏅</span><span aria-label="發佈至 Debian (1)"
data-balloon-pos="up">🏅</span><span aria-label="發佈至 Snap Store (1)"
data-balloon-pos="up">🏅</span><span aria-label="發佈至 Nixpkgs (1)"
data-balloon-pos="up">🏅</span><span aria-label="發佈至 Homebrew (1)"
data-balloon-pos="up">🏅</span><span aria-label="發佈至 MacPorts (1)"
data-balloon-pos="up">🏅</span><span aria-label="發佈至 Chocolatey (1)"
data-balloon-pos="up">🏅</span><span aria-label="發佈至 Scoop (1)"
data-balloon-pos="up">🏅</span><span aria-label="發佈至 Winget (1)"
data-balloon-pos="up">🏅</span>):
[CLI][] for building, running, testing, and managing your [Emacs Lisp][] dependencies.
This tool is the successor to [Cask][], offering enhanced stability, cross-platform capability, and extensibility.
- [Cask][] (春 2021 – 春 2022 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
Project management tool for [Emacs][].
I'm the maintainer specifically responsible to [Windows][] platform.

</details>

### <div class="simpleicons" id="si-nix"></div> Nix

<details class="my-details">
  <summary>詳細資訊</summary>

- [jcs090218/nur](https://github.com/jcs090218/nur) (秋 2024 – 現在):
Jen-Chieh's [Nix User Repository (NUR)][NUR].
- [eask2nix](https://github.com/nix-community/eask2nix) (秋 2022 <span aria-label="發佈至 NPM (7)"
data-balloon-pos="up">🏅</span>):
Convert [Eask][emacs-eask/cli] into [Nix][] expressions.
- [nixpkgs][] (秋 2022 – 現在 <span aria-label="貢獻者"
data-balloon-pos="up">✨</span>):
[Nix][] Packages collection & [NixOS][].
I serve as the package maintainer for a small set of packages.

</details>

### 🖇 語言用戶端和伺服器

<details class="my-details" open>
  <summary>詳細資訊</summary>

- [vscode-ellsp](https://github.com/elisp-lsp/vscode-ellsp) (冬 2023 <span aria-label="發佈至 VSCode Marketplace (2)"
data-balloon-pos="up">🏅</span>):
[Emacs Lisp][] languages support for [Visual Studio Code][VSCode].
- [ellsp](https://github.com/elisp-lsp/ellsp) (冬 2023):
Language server implementation for [Emacs Lisp][].
The emacs client (using [lsp-mode][]) is also included; do `M-x ellsp-register` to enable it.
- [vscode-shader](https://github.com/shader-ls/vscode-shader) (秋 2023 <span aria-label="發佈至 VSCode Marketplace (1)"
data-balloon-pos="up">🏅</span>):
Shader languages support for [Visual Studio Code][VSCode].
- [shader-language-server][] (夏 2023 – 秋 2023 <span aria-label="發佈至 NuGet (1)"
data-balloon-pos="up">🏅</span>):
Language server implementation for [ShaderLab][].
It also provides support for various CG programming languages such as [HLSL][], [GLSL][], [Cg][], and more.
- [grammarly-language-server][] (夏 2022 <span aria-label="貢獻者"
data-balloon-pos="up">✨</span><span aria-label="維護者"
data-balloon-pos="up">👷</span><span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
[Grammarly][] for [VS Code][VSCode].
- [unofficial-grammarly-language-server][] (春 2021 <span aria-label="貢獻者"
data-balloon-pos="up">✨</span><span aria-label="維護者"
data-balloon-pos="up">👷</span><span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
Unofficial [Grammarly][] extension.
Forked from the original repository and maintained a version to ensure compatibility with various editors.
This language server is now deprecated as the upstream has transitioned to the official API in 2022.
Users are encouraged to use the newer [grammarly-language-server][] instead.

</details>

### <div class="simpleicons" id="si-emacs"></div> Emacs

<details class="my-details">
  <summary>詳細資訊</summary>

> 📢 大部分的 [Emacs][] 套件都發表在 [MELPA][] <span aria-label="發布至 MELPA" data-balloon-pos="up">🏅</span>
> 或 [JCS-ELPA][] <span aria-label="發布至 JCS-ELPA" data-balloon-pos="up">🏅</span>,
> 上，所以我不會明確列出。

- [org-journal](https://github.com/bastibe/org-journal) (夏 2025 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
一個簡單的基於 [org-mode][] 的日誌模式。
- [lsp-smart-req](https://github.com/jcs-elpa/lsp-smart-req) (春 2025):
延遲載入 [LSP][lsp-mode] 套件。
- [sideline-emoji](https://github.com/emacs-sideline/sideline-emoji) (春 2025):
使用 [emoji][] 顯示 [sideline][] 訊息.
- [eglot-ltex-plus](https://github.com/emacs-languagetool/eglot-ltex-plus) (春 2025):
[Eglot][] 客戶端利用 [LTEX+ 語言伺服器][ltex-ls-plus]。
- [lsp-ltex-plus](https://github.com/emacs-languagetool/lsp-ltex-plus) (春 2025):
[lsp-mode][] 客戶端利用 [LTEX+ 語言伺服器][ltex-ls-plus]。
- [highlight-indent-guides](https://github.com/DarthFennec/highlight-indent-guides) (冬 2024 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] 次要模式突顯縮排。
- [qob-mode](https://github.com/cl-qob/qob-mode) (冬 2024):
用於編輯 [Qob][cl-qob/cli] 檔案的主要模式。
- [jcs-screensaver](https://github.com/jcs-emacs/jcs-screensaver) (冬 2024):
[jcs-emacs][] 的 [螢幕保護程式][screensaver]。
- [sideline-geiser](https://github.com/emacs-sideline/sideline-geiser) (冬 2024):
使用 [sideline][] 顯示 [Geiser](https://www.nongnu.org/geiser/) 結果。
- [sideline-racket](https://github.com/emacs-sideline/sideline-racket) (冬 2024):
使用 [sideline][] 顯示 [racket](https://github.com/greghendershott/racket-mode) 結果。
- [sideline-sly](https://github.com/emacs-sideline/sideline-sly) (冬 2024):
使用 [sideline][] 顯示 [SLY](https://github.com/joaotavora/sly) 結果。
- [sideline-cider](https://github.com/emacs-sideline/sideline-cider) (冬 2024):
使用 [sideline][] 顯示 [CIDER](https://github.com/clojure-emacs/cider) 結果。
- [sideline-eros](https://github.com/emacs-sideline/sideline-eros) (冬 2024):
顯示 [EROS](https://github.com/xiongtx/eros) 結果與 [sideline][]。
- [markdown-toc](https://github.com/ardumont/markdown-toc) (冬 2024 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
在 [markdown][] 文件中生成 [TOC][Table of contents]。
- [ueval](https://github.com/jcs-elpa/ueval) (冬 2024):
通用評估工具。
- [rustic](https://github.com/emacs-rustic/rustic) (冬 2024 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Rust][] 開發環境。
- [rust-mode](https://github.com/rust-lang/rust-mode) (秋 2024 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] 配置用於 [Rust][].
- [cognitive-complexity](https://github.com/emacs-vs/cognitive-complexity) (夏 2024):
在 [Emacs][] 29+（基於 treesit）中顯示代碼的 [認知複雜度][Cognitive Complexity]。
該套件基於 [codemetrics][]，但旨在支持內建的 `treesit.el`。
（由 [@abougouffa][github/abougouffa] 移植 ❤️）
- [treesit-langs](https://github.com/emacs-tree-sitter/treesit-langs) (夏 2024):
[Emacs][] 的 `treesit.el` 語言包。
該包基於 [tree-sitter-langs][]，但旨在支持內置的 `treesit.el`。
- [colorful-mode](https://github.com/DevelopmentCool2449/colorful-mode) (夏 2024 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
🎨 預覽緩衝區中的任何顏色。
- [responsive-window](https://github.com/jcs-elpa/responsive-window) (夏 2024):
自動適應不同的螢幕尺寸。
- [cogru.el](https://github.com/Cogru/cogru.el) (夏 2024):
[Cogru][] [Emacs][] 插件。
- [treesit-fold](https://github.com/emacs-tree-sitter/treesit-fold) (夏 2024):
使用 `treesit.el` 進行代碼折疊。
（由 [@DevelopmentCool2449][github/DevelopmentCool2449] 移植 ❤️）
- [region-occurrences-highlighter](https://github.com/alvarogonzalezsotillo/region-occurrences-highlighter) (夏 2024 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
此 [emacs][] 套件實現了一個本地次要模式，用於突出顯示當前選中的區域。
- [ansi-colorful](https://github.com/jcs-elpa/ansi-colorful) (夏 2024):
切換顯示 `ansi-color`。
- [centaur-tabs](https://github.com/ema2159/centaur-tabs) (夏 2024 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] 插件，旨在成為美觀、現代化的標籤插件。
- [auto-close-block][] (夏 2024):
自動關閉區塊。
- [doom-dashboard](https://github.com/emacs-dashboard/doom-dashboard) (春 2024 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Doom][doomemacs] 類似於 [emacs][] [dashboard][emacs-dashboard] 的風格。
- [sideline-load-cost](https://github.com/emacs-sideline/sideline-load-cost) (春 2024):
使用 [sideline][] 顯示載入/所需模組大小。
- [guard-lf](https://github.com/jcs-elpa/guard-lf) (春 2024):
保護大型文件。
- [flymake-ziglint](https://github.com/flymake/flymake-ziglint) (春 2024):
[Flymake][] 用於 [ziglint][].
- [flycheck-ziglint](https://github.com/flycheck/flycheck-ziglint) (春 2024):
[Flycheck][] 用於 [ziglint][]。
- [flymake-dart](https://github.com/flymake/flymake-dart) (春 2024):
[Flymake][] 用於 [dart][] 分析。
- [flycheck-dart](https://github.com/flycheck/flycheck-dart) (春 2024):
[Flycheck][] 用於 [dart][] 分析。
- [zig-mode](https://github.com/ziglang/zig-mode) (春 2024 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] 的 [Zig][] 模式。
- [gptscript-mode](https://github.com/emacs-openai/gptscript-mode) (春 2024):
編輯 [GPTScript][] 自然語言的主要模式。
- [dashboard-bm](https://github.com/emacs-dashboard/dashboard-bm) (春 2024 <span aria-label="貢獻者"
data-balloon-pos="up">✨</span><span aria-label="維護者"
data-balloon-pos="up">👷</span>):
視覺書籤（[bm.el](https://github.com/joodland/bm)）用於 [Dashboard][emacs-dashboard]。
- [google-gemini](https://github.com/emacs-openai/google-gemini) (春 2024):
用於 [Google Gemini][] API 的 Elisp 庫。
- [flycheck-rust](https://github.com/flycheck/flycheck-rust) (春 2024 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
改進 [Rust][]/[Cargo][] 對 [Flycheck][] 的支援。
- [copilot.el](https://github.com/copilot-emacs/copilot.el) (春 2024 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] 的非官方 [Copilot][] 插件。
- [rainbow-csv](https://github.com/emacs-vs/rainbow-csv) (冬 2023):
🌈 用不同的彩虹顏色突出顯示 [CSV][] 和 [TSV][] 電子表格文件。
- [qss-mode](https://github.com/jcs-elpa/qss-mode) (冬 2023):
[Qt 樣式表][Qt Style Sheets] 的主要模式。
- [sideline-eglot](https://github.com/emacs-sideline/sideline-eglot) (冬 2023):
使用 [sideline] 顯示 [eglot] 資訊。
- [company-emmet](https://github.com/emacs-vs/company-emmet) (冬 2023):
[Company][] 補全 [emmet][]。
- [ic](https://github.com/jcs-elpa/ic) (冬 2023):
美觀的打印以進行調試。
靈感來自 Python/PyPi 社區的 [icecream](https://pypi.org/project/icecream/) 套件。
- [jcs-template][] (冬 2023):
[jcs-emacs][] 的模板模組。
- [dart-mode](https://github.com/emacsorphanage/dart-mode) (秋 2023 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
用於 [Dart][] 語言的 [Emacs][] 模式。
- [php-mode](https://github.com/emacs-php/php-mode) (秋 2023 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
一個強大且靈活的 [Emacs][] 主模式，用於編輯 [PHP][] 腳本。
- [elisp-tree-sitter][] (秋 2023 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs Lisp][] [tree-sitter][] 的綁定。
- [tree-sitter-langs][] (秋 2023 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
Emacs 的 [tree-sitter][elisp-tree-sitter] 软件包的语言包。
- [blacken](https://github.com/pythonic-emacs/blacken) (秋 2023 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Python][] [Black](https://pypi.org/project/black/) 用於 [Emacs][]。
- [anaconda-mode](https://github.com/pythonic-emacs/anaconda-mode) (秋 2023 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
代碼導航、文檔查詢和自動完成功能適用於 [Python][]。
- [company-anaconda](https://github.com/pythonic-emacs/company-anaconda) (秋 2023 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Anaconda][] [company-mode][] 的後端。
- [pythonic](https://github.com/pythonic-emacs/pythonic) (秋 2023 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
用於編寫 Python 風格的 [emacs][] 套件的實用函數。
- [djangonaut](https://github.com/pythonic-emacs/djangonaut) (秋 2023 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] [Django][] 的次要模式。
- [isortify](https://github.com/pythonic-emacs/isortify) (秋 2023 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Isort][] 適用於 [Emacs][]。
- [pyenv-mode](https://github.com/pythonic-emacs/pyenv-mode) (秋 2023 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
將 [pyenv][] 與 [python-mode][] 整合。
- [chatgpt-sideline](https://github.com/emacs-openai/chatgpt-sideline) (秋 2023):
[Sideline][] 支持 [chatgpt][emacs-openai/chatgpt]。
- [eglot-uniteai](https://github.com/emacs-openai/eglot-uniteai) (秋 2023 <span aria-label="貢獻者"
data-balloon-pos="up">✨</span><span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[eglot][] 客戶利用 [uniteai][]。
- [lsp-uniteai](https://github.com/emacs-openai/lsp-uniteai) (秋 2023 <span aria-label="貢獻者"
data-balloon-pos="up">✨</span><span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[lsp-mode][] 客戶端利用 [uniteai][]。
- [eglot-shader](https://github.com/shader-ls/eglot-shader) (秋 2023):
[eglot][] 客戶端利用 [shader-language-server][]。
- [nerd-icons-buffer-menu](https://github.com/jcs-elpa/nerd-icons-buffer-menu) (夏 2023):
在 [buffer-menu][] 中顯示 [nerd icons][nerd-icons]。
- [on.el](https://github.com/elp-revive/on.el) (夏 2023 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
加快 [Emacs][] 啟動速度的鉤子。
- [deepl](https://github.com/emacs-openai/deepl) (夏 2023):
[Elisp][] [DeepL][] API 的庫。
- [jcs-poptip][] (夏 2023):
通用彈出提示。
- [doxygen-asterisk](https://github.com/jcs-legacy/doxygen-asterisk) (夏 2023):
輔助模式，可幫助您插入成對的 `/*` 和 `*/`。
該套件已不再受支持，因為它已被 [auto-close-block][] 套件取代。
- [lsp-shader](https://github.com/shader-ls/lsp-shader) (春 2023 – 夏 2023):
[lsp-mode][] 客戶端利用 [shader-language-server][]。
- [codemetrics][] (春 2023):
插件顯示複雜度資訊。
靈感來自 [VSCode][] 社群的 [CodeMetrics](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics)。
此插件實現了 **認知複雜度** 指標的即時計算，該指標由 G. Ann Campbell 在
[認知複雜度——衡量可理解性的新方法][Cognitive Complexity]
(c) SonarSource S.A. 2016-2021，瑞士。
- [jcs-echobar][] (春 2023):
[jcs-emacs][] 的回聲欄。
- [jcs-frametitle][] (春 2023):
[jcs-emacs][] 的框架標題。
- [vs-comment-return](https://github.com/emacs-vs/vs-comment-return) (春 2023):
評論返回類似於 [Visual Studio][]。
- [flymake-elsa](https://github.com/flymake/flymake-elsa) (春 2023):
[Flymake][] 與 [Elsa][] 的整合 — [Emacs lisp][] 靜態分析器。
- [dall-e](https://github.com/emacs-openai/dall-e) (春 2023):
在 [Emacs][] 中使用 [DALL-E][]。
- [chatgpt][] (春 2023):
在 [Emacs][] 中使用 [ChatGPT][]。
- [codegpt](https://github.com/emacs-openai/codegpt) (春 2023):
在 [Emacs][] 中使用 [GPT-3](https://en.wikipedia.org/wiki/GPT-3)。
該項目靈感來自 [VSCode][] 社區的 [Code GPT：聊天與 AI 代理](https://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt)。
- [openai](https://github.com/emacs-openai/openai) (春 2023):
[Elisp][] 庫，用於 [OpenAI][] API。
- [espuds](https://github.com/ecukes/espuds) (春 2023 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Ecukes][] 的常见步骤定义。
- [ecukes][] (春 2023 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] 的 Cucumber。
- [sound-async](https://github.com/jcs-elpa/sound-async) (冬 2022):
以非同步方式播放聲音。
- [block-travel](https://github.com/emacs-vs/block-travel) (冬 2022):
移至上一行/下一行空白行。
靈感來源：Atom 社群中的 [Block Travel](https://atom.io/packages/block-travel) 和 VSCode 社群中的 [Block Travel](https://marketplace.visualstudio.com/items?itemName=sashaweiss.block-travel)。
- [jcs-modeline][] (冬 2022):
[jcs-emacs][] 的 modeline。
- [pkg-dm](https://github.com/jcs-elpa/pkg-dm) (冬 2022):
包依賴關係管理。
[Emacs][] 很少遇到包之間的依賴關係混淆的問題；這有助於提供清晰度。
- [vc-refresh](https://github.com/jcs-elpa/vc-refresh) (冬 2022):
在某些事件中刷新 `vc-state`，以獲得更好的用戶體驗。
- [flycheck-deno](https://github.com/flycheck/flycheck-deno) (冬 2022):
[Flycheck][] 適用於 [deno-lint](https://docs.deno.com/runtime/manual/tools/linter)。
- [ace-link-dashboard](https://github.com/emacs-dashboard/ace-link-dashboard) (冬 2022 <span aria-label="貢獻者"
data-balloon-pos="up">✨</span><span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Ace-link](https://github.com/abo-abo/ace-link) 適用於 [emacs-dashboard][]。
- [easky](https://github.com/emacs-eask/easky) (冬 2022):
在 [Emacs][] 中控制 [Eask CLI][emacs-eask/cli]。
- [eldoc-eask](https://github.com/emacs-eask/eldoc-eask) (冬 2022):
[Eldoc][] 支持 [Eask][] 文件。
- [company-eask](https://github.com/emacs-eask/company-eask) (冬 2022):
[Company][] [Eask][] 文件的後端。
- [eask](https://github.com/emacs-eask/eask) (冬 2022):
核心 [Eask][emacs-eask/cli] API，用於 [Eask CLI][emacs-eask/cli] 開發。
- [company-elisp-keywords](https://github.com/jcs-elpa/company-elisp-keywords) (冬 2022):
[Company][] 完成 `finder-known-keywords`。
- [cycle-case-style](https://github.com/jcs-elpa/cycle-case-style) (冬 2022):
循環切換案例風格（PascalCase、camelCase 等）。
- [cycle-slash](https://github.com/jcs-elpa/cycle-slash) (冬 2022):
循環切換斜線、反斜線和雙反斜線。
- [helafy](https://github.com/jcs-elpa/helafy) (冬 2022):
縮小/醜化/美化內容。
- [repos-window](https://github.com/jcs-elpa/repos-window) (冬 2022):
需要時重新定位視窗。
- [company-paths](https://github.com/emacs-vs/company-paths) (冬 2022):
用於路徑的 [company][] 後端。
- [vs-electric-spacing](https://github.com/emacs-vs/vs-electric-spacing) (冬 2022):
在運算符周圍添加空格，例如 [Visual Studio][]。
- [eval-mark](https://github.com/jcs-elpa/eval-mark) (冬 2022):
評估後取消標記。
Emacs 的這種行為對我來說更合理。
- [balanced-windows](https://github.com/elp-revive/balanced-windows) (冬 2022):
保持窗戶平衡。
- [ff-guard](https://github.com/jcs-elpa/ff-guard) (冬 2022):
為不存在的文件創建父目錄。
- [fof](https://github.com/jcs-elpa/fof) (冬 2022)
`ff-find-other-file` 的預設配置。
- [ffpc](https://github.com/jcs-elpa/ffpc) (冬 2022):
在專案或當前目錄中查找檔案。
- [elenv](https://github.com/jcs-elpa/elenv) (冬 2022):
環境變量管理。
- [execrun](https://github.com/jcs-elpa/execrun) (冬 2022):
運行 [compilation-mode][]。
- [editorconfig-emacs](https://github.com/editorconfig/editorconfig-emacs) (秋 2022 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] 的 [EditorConfig][] 插件。
- [msgu](https://github.com/jcs-elpa/msgu) (秋 2022):
實用功能有助於輸出訊息。
- [toggle-profiler](https://github.com/jcs-elpa/toggle-profiler) (秋 2022):
與 [分析器](https://www.gnu.org/software/emacs/manual/html_node/elisp/Profiling.html) 互動的有用功能。
- [sideline-color](https://github.com/emacs-sideline/sideline-color) (秋 2022):
使用 [sideline][] 顯示顏色資訊。
- [git-gutter](https://github.com/emacsorphanage/git-gutter) (秋 2022 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] 版 [GitGutter][]，這是 [Sublime Text][] 插件。
- [company-autoconf](https://github.com/elp-revive/company-autoconf) (秋 2022 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
用於在 [Emacs][] 中編輯 [autoconf][] 文件的完成後端。
- [company-kaomoji](https://github.com/jcs-elpa/company-kaomoji) (秋 2022):
[Company][] [Kaomoji][] 的後端。
- [kaomoji.el](https://github.com/elp-revive/kaomoji.el) (秋 2022 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
輕鬆輸入[kaomoji][]（顔文字）！┌（┌ ＾o＾）┐ﾎﾓｫ
- [company-makefile](https://github.com/elp-revive/company-makefile) (秋 2022 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
[Emacs][] [company][] [GNU Makefiles][Make] 的完成後端。
- [company-cmd](https://github.com/elp-revive/company-cmd) (秋 2022 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
[Emacs][] [company-mode][] Windows [DOS][]/[batch][] 腳本的後端。
- [company-powershell](https://github.com/elp-revive/company-powershell) (秋 2022 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
[Emacs][] 中 [powershell-mode][] 的自動完成後端。
- [company-dockerfile](https://github.com/elp-revive/company-dockerfile) (秋 2022 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
將 [dockerfile][Docker] 關鍵字添加到 [company-mode][] 關鍵字列表中。
- [ts-docstr](https://github.com/emacs-vs/ts-docstr) (秋 2022):
使用 [tree-sitter][] 的文件字符串 minor mode。
- [prt](https://github.com/jcs-elpa/prt) (秋 2022):
Progress Reporter 庫.
- [fussy](https://github.com/jojojames/fussy) (夏 2022 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] [完成樣式][completion-style] 利用 [flx][emacs-flx]。
- [vsc-multiple-cursors](https://github.com/emacs-vs/vsc-multiple-cursors) (夏 2022):
[多光標][multiple-cursors] 整合功能與 [VSCode][] 類似。
- [sideline-blame](https://github.com/emacs-sideline/sideline-blame) (夏 2022):
使用 [sideline][] 顯示 blame 訊息。
- [sideline-lsp](https://github.com/emacs-sideline/sideline-lsp) (夏 2022):
使用 [sideline][] 顯示 [lsp-mode][] 資訊。
- [sideline-flymake](https://github.com/emacs-sideline/sideline-flymake) (夏 2022):
使用 [sideline][] 顯示 [flymake][] 錯誤。
- [sideline-flycheck](https://github.com/emacs-sideline/sideline-flycheck) (夏 2022):
使用[sideline][]顯示[flycheck][]錯誤。
- [sideline][] (夏 2022):
在側邊顯示資訊。
- [gdscript-mode](https://github.com/godotengine/emacs-gdscript-mode) (夏 2022 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
一個用於獲得 [GDScript][] 支援和語法高亮顯示的 [Emacs][] 套件。
- [javap-mode](https://github.com/elp-revive/javap-mode) (夏 2022 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
在 [Emacs][] 中打開 JVM 類文件時，顯示 [javap](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javap.html) 的輸出結果。
- [company-coffee](https://github.com/elp-revive/company-coffee) (夏 2022 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
[Emacs][] 將 [coffee][CoffeeScript] 關鍵字添加到 `company-keywords` 以進行自動完成。
- [company-c-headers](https://github.com/elp-revive/company-c-headers) (夏 2022 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
使用 [Company][] 自動完成 [C][] / [C++][] 標頭。
- [buffer-move](https://github.com/elp-revive/buffer-move) (夏 2022 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
輕鬆交換 buffers。
- [noflet](https://github.com/elp-revive/noflet) (夏 2022 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
nic 的主要功能是為裝飾目的而提供裝飾功能。
- [eping](https://github.com/elp-revive/eping) (夏 2022 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
一個使用 [ping](https://en.wikipedia.org/wiki/Ping_(networking_utility)) 檢查互聯網連接的 [Emacs][] 套件。
- [flymake-eask](https://github.com/flymake/flymake-eask) (夏 2022):
[Eask][emacs-eask/cli] 在 [Flymake][] 中的支持。
- [flycheck-eask](https://github.com/flycheck/flycheck-eask) (夏 2022):
[Eask][emacs-eask/cli] 在 [Flycheck][] 中的支持。
- [recentf-excl](https://github.com/jcs-elpa/recentf-excl) (夏 2022):
排除最近文件的命令。
某些命令可能會無意中添加文件，導致 [recentf][] 中出現不需要的條目。
此套件可幫助您解決此問題。
- [mbs](https://github.com/jcs-elpa/mbs) (夏 2022):
[Minibuffer][] 狀態整理.
- [vertico-flx](https://github.com/jcs-elpa/vertico-flx) (夏 2022):
[flx][emacs-flx] 與 [vertico][] 的整合。
- [flx-style](https://github.com/jcs-elpa/flx-style) (春 2022):
[補全風格][completion styles] 用於 [emacs-flx][]。
- [vs-edit-mode](https://github.com/emacs-vs/vs-edit-mode) (春 2022):
Minor mode 實現 [Visual Studio][] 中的編輯體驗。
- [message-clean-mode](https://github.com/jcs-elpa/message-clean-mode) (春 2022):
保持訊息緩衝區乾淨。
對於 [elisp][] 開發人員來說，保持 `*Messages*` 緩衝區乾淨對於有效追蹤除錯日誌資訊至關重要。
- [fontawesome](https://github.com/emacsorphanage/fontawesome) (春 2022 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[FontAwesome][] 工具。
- [quick-peek](https://github.com/emacs-vs/quick-peek) (春 2022 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span><span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] 的快速預覽內嵌視窗庫。
- [vs-revbuf](https://github.com/emacs-vs/vs-revbuf) (春 2022):
還原緩衝區，如 [Visual Studio][]。
- [eask-mode](https://github.com/emacs-eask/eask-mode) (春 2022):
用於編輯 [Eask][emacs-eask/cli] 文件的 major mode。
- [buffer-menu-project](https://github.com/jcs-elpa/buffer-menu-project) (春 2022):
列出與專案相關的 buffers。
- [buffer-menu-filter](https://github.com/jcs-elpa/buffer-menu-filter) (春 2022):
使用假標題過濾 [buffer-menu][] 項目。
雖然 [buffer-menu][] 是切換緩衝區的預設方法，但它缺乏過濾功能。
此套件引入了該功能。
- [electric-indent-sexp](https://github.com/emacs-vs/electric-indent-sexp) (春 2022):
自動縮進整個平衡表達式塊。
- [fextern](https://github.com/emacs-vs/fextern) (春 2022):
記錄文件外部統計信息。
- [auto-scroll-bar](https://github.com/emacs-vs/auto-scroll-bar) (春 2022):
根據需要自動顯示/隱藏滾動條。
- [fuz-bin](https://github.com/jcs-legacy/fuz-bin) (冬 2021):
與 [fuz.el][] 類似，但帶有預編譯的二進位檔。
我更喜歡帶有預編譯二進位檔的套件，因為這樣可以改善使用者體驗。
- [flx-rs][jcs-elpa/flx-rs] (冬 2021):
使用動態模組在 [Rust] 中運行 [emacs-flx]。
它打包了 [Rust] 庫 [flx-rs][the-flx/flx-rs]，並包含預編譯的二進位檔，這些二進位檔是通過 [GitHub Actions] 構建並上傳為工件的。
- [flxy](https://github.com/jcs-legacy/flxy) (冬 2021):
[flxy][flxy-rs] 在 [Rust][] 中使用動態模組。
- [sublime-fuzzy](https://github.com/jcs-legacy/sublime-fuzzy) (冬 2021):
基於 Sublime Text 字串搜尋的模糊匹配演算法。
使用 [Rust][] 將 [sublime_fuzzy](https://github.com/Schlechtwetterfront/fuzzy-rs) 編譯為 [Emacs][] 可載入的二進位檔。
- [github-tags](https://github.com/jcs-elpa/github-tags) (秋 2021):
通過 [GitHub][] API 檢索標籤信息。
- [company-box](https://github.com/elp-revive/company-box) (秋 2021 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
一個帶有圖標的 [company][] 前端。
由於在 [Windows][] 上使用困難，因此進行了分叉，加入了許多錯誤修復、性能增強和其他改進。
- [ts-fold][] (秋 2021):
使用 [tree-sitter][] 進行代碼折疊。
- [hl-preproc](https://github.com/emacs-vs/hl-preproc) (秋 2021):
取消突出顯示無效的預處理器區域。
此套件使用 [meta-net][] 解析 csproj 檔案中的所有定義常數。
- [eldoc-meta-net](https://github.com/emacs-vs/eldoc-meta-net) (秋 2021):
[Eldoc][] 支持 [meta-net][]。
- [company-emojify](https://github.com/jcs-elpa/company-emojify) (秋 2021):
[Company][] 自動補全 [Emojify][].
- [meta-view](https://github.com/emacs-vs/meta-view) (夏 2021):
查看來自 [.NET][] 組件的元數據。
- [company-meta-net](https://github.com/emacs-vs/company-meta-net) (夏 2021):
[company-mode][] [C#][] 項目的後端。
- [meta-net][] (夏 2021):
解析 [.NET][] 組件的 [XML][]。
- [flex](https://github.com/jcs-legacy/flex) (夏 2021):
靈活匹配庫。
算法摘自包 [ido-better-flex](https://github.com/vic/ido-better-flex)。
- [liquidmetal](https://github.com/jcs-legacy/liquidmetal) (夏 2021):
Quicksilver 計分演算法的模仿多合金。
從 [rmm5t/liquidmetal](https://github.com/rmm5t/liquidmetal) 移植。
- [logms](https://github.com/jcs-elpa/logms) (夏 2021):
帶有可點擊鏈接的日誌訊息，可連結到上下文。
- [eglot-languagetool](https://github.com/emacs-languagetool/eglot-languagetool) (夏 2021):
[eglot][] 客戶端利用 [LanguageTool 語言伺服器][languagetool-languageserver]。
- [lsp-languagetool](https://github.com/emacs-languagetool/lsp-languagetool) (夏 2021):
[lsp-mode][] 客戶端利用 [LanguageTool 語言伺服器][languagetool-languageserver]。
- [eglot-ltex](https://github.com/emacs-languagetool/eglot-ltex) (夏 2021):
[Eglot][] 客戶端利用 [LTEX 語言伺服器][ltex-ls]。
- [lsp-ltex](https://github.com/emacs-languagetool/lsp-ltex) (夏 2021):
[lsp-mode][] 客戶端利用 [LTEX 語言伺服器][ltex-ls]。
- [flymake-languagetool](https://github.com/emacs-languagetool/flymake-languagetool) (夏 2021):
[Flymake][] 支持 [LanguageTool][]。
- [flycheck-languagetool](https://github.com/emacs-languagetool/flycheck-languagetool) (夏 2021):
[Flycheck][] 支持 [LanguageTool][]。
- [auth-source-keytar](https://github.com/emacs-grammarly/auth-source-keytar) (夏 2021):
將 [auth-source][] 與 [keytar][] 整合。
- [applescript-mode](https://github.com/emacsorphanage/applescript-mode) (春 2021 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] 模式，用於編輯 [AppleScript][]。
- [send-to-osx-grammarly](https://github.com/emacs-grammarly/send-to-osx-grammarly) (春 2021):
一個用於與 Grammarly 進行文字傳送的 Emacs 擴展。
- [eglot-grammarly](https://github.com/emacs-grammarly/eglot-grammarly) (春 2021):
[eglot][] 客戶端利用 [grammarly-language-server][]。
- [lsp-grammarly][] (春 2021):
[lsp-mode][] 客戶端利用 [grammarly-language-server][]。
- [flycheck-google-cpplint](https://github.com/flycheck/flycheck-google-cpplint) (春 2021 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Google C++ 風格檢查器][cpplint] 用於 [Flycheck][]。
- [flymake-google-cpplint](https://github.com/flymake/flymake-google-cpplint) (春 2021 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
使用 [flymake][] 在 [Emacs][] 上遵守 [Google C++ 風格指南][cpplint]。
- [flymake-cppcheck](https://github.com/flymake/flymake-cppcheck) (春 2021 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Cppcheck][] 適用於 [Emacs][] 並搭配 [flymake][] 使用。
- [emacs-flymake-perlcritic](https://github.com/flymake/emacs-flymake-perlcritic) (春 2021 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
通過 [Emacs][] [Flymake][] 執行 [Perl::Critic][] 靜態分析「While U Type」。
- [flymake-phpcs](https://github.com/flymake/flymake-phpcs) (春 2021 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[PHP CodeSniffer][PHP_CodeSniffer] 適用於 [Emacs][] 搭配 [flymake][]。
- [emacs-flymake-phpcs](https://github.com/flymake/emacs-flymake-phpcs) (春 2021 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
Glue 將 [Emacs][] [Flymake][] 模式綁定到 [PHP_CodeSniffer][] 靜態分析。
- [emacs-flymake-cursor](https://github.com/flymake/emacs-flymake-cursor) (春 2021 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
在 [minibuffer][] 上顯示目前行的 [flymake][] 錯誤。
- [fuzzy-el](https://github.com/auto-complete/fuzzy-el) (春 2021 – 現在 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
為 [GNU Emacs][Emacs] 設計的模糊匹配工具，最初是為 [auto-complete][] 而創。
- [keytar][] (春 2021):
[Keytar-cli][] 的 [Emacs Lisp][] 介面。
- [lsp-grammarly-un](https://github.com/emacs-grammarly/lsp-grammarly-un) (春 2021):
[lsp-mode][] 客戶端利用 [unofficial-grammarly-language-server][].
- [watch-cursor](https://github.com/jcs-elpa/watch-cursor) (冬 2020):
顯示所有即時視窗的游標。
- [docstr](https://github.com/emacs-vs/docstr) (冬 2020):
文件字串 minor mode。
- [modablist](https://github.com/jcs-elpa/modablist) (冬 2020):
可修改 [tabulated-list][] 延伸。
- [scroll-text](https://github.com/jcs-legacy/scroll-text) (冬 2020):
在 [Emacs][] 緩衝區內動畫捲動文字的愉快工作。
- [npm-pkgs](https://github.com/jcs-elpa/npm-pkgs) (冬 2020):
npm 套件用戶端。
- [preview-it](https://github.com/jcs-elpa/preview-it) (冬 2020):
點預覽任何內容。
- [undo-tree-vf](https://github.com/jcs-elpa/undo-tree-vf) (冬 2020):
展示台跟隨模式為 [undo-tree][]。
- [quelpa-leaf](https://github.com/quelpa/quelpa-leaf) (冬 2020):
leaf 的 Emacs [quelpa][] 處理器。
- [quelpa][] (秋 2020 – 現在 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] 的 `package.el` 相容的套件管理器使用 [MELPA的格式](https://github.com/melpa/melpa#recipe-format)。
- [auto-complete][] (秋 2020 – 現在 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] 的智慧型自動完成擴充套件。
- [un-mini](https://github.com/jcs-legacy/un-mini) (秋 2020):
失去焦點後，自動關閉 [minibuffer][]。
- [ivy-file-preview](https://github.com/jcs-legacy/ivy-file-preview) (秋 2020):
預覽目前選擇的 [ivy][] 檔案。
- [ivy-describe-modes](https://github.com/jcs-legacy/ivy-describe-modes) (秋 2020):
[Ivy][] `describe-mode` 的介面。
靈感來自 [helm-describe-modes](https://github.com/emacs-helm/helm-describe-modes)。
- [flymake-grammarly](https://github.com/emacs-grammarly/flymake-grammarly) (秋 2020):
[Flymake][] 支援 [Grammarly][]。
- [lsp-focus](https://github.com/emacs-lsp/lsp-focus) (秋 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[lsp-mode][] ❤️ [focus][].
- [helm-lsp](https://github.com/emacs-lsp/helm-lsp) (秋 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[lsp-mode][] ❤️ [helm][].
- [lsp-ivy](https://github.com/emacs-lsp/lsp-ivy) (秋 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[lsp-mode][] ❤️ [ivy][].
- [lsp-origami](https://github.com/emacs-lsp/lsp-origami) (秋 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[lsp-mode][] ❤️ [origami.el][].
- [dap-mode](https://github.com/emacs-lsp/dap-mode) (秋 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] ❤️ [Debug Adapter Protocol][dap].
- [lsp-ui](https://github.com/emacs-lsp/lsp-ui) (秋 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[lsp-mode][] 的 UI 整合。
- [lsp-mode](https://github.com/emacs-lsp/lsp-mode) (秋 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[語言伺服器通訊協定][lsp] 的 [Emacs][] 用戶端/函式庫。
- [license-templates](https://github.com/jcs-elpa/license-templates) (秋 2020):
使用 [GitHub][] API 建立 LICENSE。
- [atl-long-lines](https://github.com/jcs-elpa/atl-long-lines) (秋 2020):
行長時，關閉 [truncate-lines][] 功能。
- [atl-markup](https://github.com/jcs-elpa/atl-markup) (秋 2020):
自動截斷標記語言的行。
- [cursor-preview](https://github.com/jcs-elpa/cursor-preview) (秋 2020):
在互動執行指令時預覽游標的移動。
- [impatient-showdown](https://github.com/jcs-elpa/impatient-showdown) (秋 2020):
透過 [HTTP][] 即時預覽 markdown 緩衝區。
- [auto-highlight-symbol](https://github.com/elp-revive/auto-highlight-symbol) (秋 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
自動高亮目前符號的次要模式。
- [better-scroll](https://github.com/jcs-elpa/better-scroll) (秋 2020):
改善捲動視窗時的使用者經驗。
- [fill-page](https://github.com/jcs-elpa/fill-page) (秋 2020):
填滿 buffer，這樣您就不會在最後看到空行。
- [undersea-theme](https://github.com/jcs-legacy/undersea-theme) (秋 2020):
以海底圖像為主題。
- [origami.el][] (夏 2020 <span aria-label="分支項目"
data-balloon-pos="up">🔗</span>):
[Emacs][] 的折疊次要模式。
這個專案是一個基於 [Regular Expression][regex] 的解決方案，但在 [ts-fold][] 產生之後，這個方案就被廢棄了。
- [popup-el](https://github.com/auto-complete/popup-el) (夏 2020 – 現在 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[Emacs][] 的視覺彈出式介面函式庫。它與 [auto-complete][] 一起使用。
- [transwin](https://github.com/jcs-elpa/transwin) (夏 2020):
使視窗/框架透明。
- [helm-searcher](https://github.com/emacs-helm/helm-searcher) (夏 2020):
[Helm][] 介面使用 [searcher][]。
- [ivy-searcher](https://github.com/jcs-legacy/ivy-searcher) (夏 2020):
[Ivy][] 介面使用 [searcher][]。
- [searcher][] (夏 2020):
是 [ag][]、[rg][]、[grep][] 及其他軟體的替代軟體，以純 [elisp][Emacs Lisp] 寫成，以增強可移植性。
- [quickrun](https://github.com/emacsorphanage/quickrun) (夏 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
快速執行指令。此套件的靈感來自 [quickrun.vim](https://www.vim.org/scripts/script.php?script_id=3146)。
- [zoom-window](https://github.com/emacsorphanage/zoom-window) (春 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
縮放視窗。
- [sound-wav](https://github.com/emacsorphanage/sound-wav) (春 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
播放 [wav][] 檔案。
- [emp](https://github.com/jcs-elpa/emp) (春 2020):
[Emacs][] 音樂播放清單。
- [manage-minor-mode-table](https://github.com/jcs-elpa/manage-minor-mode-table) (春 2020):
管理表格中的 minor-modes。
擴充套件 [manage-minor-mode][] 的功能。
- [helm-themes](https://github.com/emacsorphanage/helm-themes) (春 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
使用 [helm][] 介面選擇 [Emacs][] 主題。
- [helm-gtags](https://github.com/emacsorphanage/helm-gtags) (春 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
[GNU GLOBAL](https://www.gnu.org/software/global/) [helm][] 介面。
- [helm-ag](https://github.com/emacsorphanage/helm-ag) (春 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
具有 [helm][] 介面的銀色搜尋器。
- [emoji-github](https://github.com/jcs-elpa/emoji-github) (春 2020):
顯示 [GitHub][] 的 [emoji][] 的清單。(小抄)
- [buffer-wrap](https://github.com/jcs-elpa/buffer-wrap) (春 2020):
包圍緩衝區的開始和結束。
- [dashboard-ls](https://github.com/emacs-dashboard/dashboard-ls) (春 2020):
在 [Dashboard][emacs-dashboard] 上顯示目前目錄中的檔案/目錄。
- [manage-minor-mode](https://github.com/emacsorphanage/manage-minor-mode) (春 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
在專用介面緩衝區上管理您的 minor-mode。
- [popwin](https://github.com/emacsorphanage/popwin) (春 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
用於 [Emacs][] 的彈出視窗管理器。
- [undohist](https://github.com/emacsorphanage/undohist) (春 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
GNU Emacs][Emacs] 的 Persistent Undo History。
- [yascroll](https://github.com/emacsorphanage/yascroll) (春 2020 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
另一種捲動條模式。
- [company-quickhelp-terminal](https://github.com/jcs-legacy/company-quickhelp-terminal) (冬 2019):
終端支援 [company-quickhelp](https://github.com/company-mode/company-quickhelp)。
- [ffmpeg-player](https://github.com/jcs-elpa/ffmpeg-player) (冬 2019):
使用 [ffmpeg][] 播放視訊。
由於它是逐格播放影片，因此效能明顯較差，導致大量的檔案 I/O（包括記憶體）需求。
不過，這仍然是在 [Emacs][] 中播放影片的唯一解決方案！
- [parse-it](https://github.com/jcs-elpa/parse-it) (冬 2019):
使用 [Emacs Lisp][] 的簡單 [parser][]。
它提供超過 25 種語言的支援 (例如 [C][]、[C++][]、[C#][]、[Python][]、[Lua][] 等)、
但其效能明顯較慢，因為它是在 [elisp][] 解譯器之上運作。
- [flycheck-grammarly](https://github.com/emacs-grammarly/flycheck-grammarly) (冬 2019):
[Grammarly][] 支援 [Flycheck][]。
- [grammarly](https://github.com/emacs-grammarly/grammarly) (冬 2019):
[Grammarly][] API 介面。(逆向工程解決方案)
- [tabulated-list-search](https://github.com/jcs-legacy/tabulated-list-search) (冬 2019):
提供過濾/搜尋 [tabulated-list][] 介面。
- [reveal-in-folder](https://github.com/jcs-elpa/reveal-in-folder) (冬 2019):
顯示資料夾中的目前檔案/目錄。
- [define-it](https://github.com/jcs-elpa/define-it) (冬 2019):
定義、翻譯、wiki 這個詞。
靈感來自 [Amazon Kindle](https://en.wikipedia.org/wiki/Amazon_Kindle) 的閱讀經驗。
- [multi-shell](https://github.com/jcs-elpa/multi-shell) (冬 2019):
管理多個 shell buffers。
- [vs-light-theme](https://github.com/emacs-vs/vs-light-theme) (秋 2019):
[Visual Studio IDE][Visual Studio] 淺色主題。
- [vs-dark-theme](https://github.com/emacs-vs/vs-dark-theme) (秋 2019):
[Visual Studio IDE][Visual Studio] 深色主題。
- [diminish-buffer](https://github.com/jcs-elpa/diminish-buffer) (秋 2019):
減少 (隱藏) [buffer-menu][] 中的 buffers。
- [company-fuzzy](https://github.com/jcs-elpa/company-fuzzy) (秋 2019):
[company-mode][] 的模糊匹配。
- [helm-fuzzy](https://github.com/jcs-legacy/helm-fuzzy) (秋 2019):
對 [helm][] 來源進行模糊匹配。
- [marquee-header](https://github.com/jcs-elpa/marquee-header) (秋 2019):
在標頭中顯示標記的程式碼介面。
- [alt-codes](https://github.com/jcs-elpa/alt-codes) (秋 2019):
使用 meta 鍵插入 [alt codes][]。
- [haxe-mode](https://github.com/emacsorphanage/haxe-mode) (秋 2019):
編輯 [Haxe][] 檔案的 [major-mode][]。
- [jayces-mode](https://github.com/jayces-lang/jayces-mode) (秋 2019):
編輯 [JayCeS][] 檔案的 [major-mode][]。
- [csharp-mode](https://github.com/emacs-csharp/csharp-mode) (秋 2019 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
在 [emacs][] 中編輯 [C#][] 的 [major-mode][] 。
- [dashboard][emacs-dashboard] (夏 2019 – 現在 <span aria-label="維護者"
data-balloon-pos="up">👷</span>):
可擴充的 [Emacs][] 啟動畫面，顯示最重要的東西。
- [indent-control](https://github.com/jcs-elpa/indent-control) (夏 2019):
一般控制每個模式的縮排程度。
- [show-eol](https://github.com/jcs-elpa/show-eol) (夏 2019):
在緩衝區顯示 [行結束 (EOL)][EOL] 符號。
靈感來自編輯器 [Notepad++][] 的內建功能。
- [helm-file-preview](https://github.com/jcs-legacy/helm-file-preview) (夏 2019):
預覽目前選擇的 [helm][] 檔案。
- [goto-char-preview](https://github.com/emacs-vs/goto-char-preview) (夏 2019):
執行 `goto-char` 指令時預覽字元。
- [goto-line-preview](https://github.com/emacs-vs/goto-line-preview) (春 2019):
執行 `goto-line` 指令時預覽行。
- [isearch-project](https://github.com/jcs-elpa/isearch-project) (春 2019):
透過整個專案進行遞增搜尋。
- [toggle-quotes-plus](https://github.com/jcs-elpa/toggle-quotes-plus) (春 2019):
簡單的引號切換器，可在 `"`、`'` 和 <code>`</code> 中循環切換。
- [file-header](https://github.com/jcs-elpa/file-header) (冬 2018):
高度自訂的自我設計檔案標頭。
- [com-css-sort](https://github.com/jcs-elpa/com-css-sort) (冬 2018):
常用的 [CSS][] 屬性排序方式。
- [htmltagwrap](https://github.com/emacs-vs/htmltagwrap) (冬 2018):
以標籤包裝 [HTML][] 程式碼。
靈感來自 [VSCode][] 社群的 [htmltagwrap](https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap)。
- [auto-close-tag](https://github.com/jcs-legacy/auto-close-tag) (冬 2018):
自動加入 [HTML][]/[XML][] 關閉標籤。
靈感來自 [VSCode][] 社群的 [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)。
- [auto-rename-tag](https://github.com/emacs-vs/auto-rename-tag) (冬 2018):
自動重新命名成對的 [HTML][]/[XML][] 標籤。
靈感來自 [VSCode][] 社群的 [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)。
- [use-ttf](https://github.com/jcs-elpa/use-ttf) (夏 2018):
在不同的作業系統中保持字型一致性。
- [project-abbrev](https://github.com/jcs-elpa/project-abbrev) (夏 2018):
在專案中自訂縮寫擴充。
- [line-reminder](https://github.com/emacs-vs/line-reminder) (夏 2018):
已變更和已儲存線的線注解。
- [organize-imports-java](https://github.com/jcs-elpa/organize-imports-java) (夏 2018):
自動組織 [Java][] 程式碼中的匯入。
隨著 [語言伺服器協定][LSP] 的出現，它已被廢棄。

#### Package Archive (ELPA)

- [jcs-elpa][] (冬 2021 – 現在):
Jen-Chieh Shen (我自己的) [ELPA](https://www.emacswiki.org/emacs/ELPA)；目前有 **200+** 包。
- [melpa][] (秋 2020 – 冬 2023 <span aria-label="貢獻者"
data-balloon-pos="up">✨</span>):
最大的 [Emacs][] 套件 repo 的 Recipes 和建立機制。
[MELPA][] 是「[Milkypostman][github/Milkypostman] 的 [Emacs Lisp Package Archive][ELPA] 」的縮寫，而我是該套件庫的 **10 大**貢獻者之一。

#### 分佈

- [jcs-emacs][] (夏 2015 – 現在):
Emacs 發行版可在所有作業系統上順暢運作，提供卓越的效能，尤其是在傳統 [Windows][] 系統上。

</details>

### ⚙️ 技術工具

<details class="my-details">
  <summary>詳細資訊</summary>

- [minify-dir](https://github.com/jcs090218/node-minify-dir) (春 2019 <span aria-label="發佈至 NPM (1)"
data-balloon-pos="up">🏅</span>):
最小化目錄內的所有檔案。
另一個最初為靜態網站產生器所建立的 [Node.js][] 網站最小化程式 - [SiraDoc][]。
- [JCSBat_Util](https://github.com/jcs090218/JCSBat_Util) (冬 2016 – 現在):
一些方便的 [batch][] 檔案，適用於我身為程式設計師的工作流程。([Windows][])

</details>

### 🔓 逆向工程、駭客和安全性

<details class="my-details">
  <summary>詳細資訊</summary>

- [keytar-cli][] (春 2021 <span aria-label="發佈至 NPM (3)"
data-balloon-pos="up">🏅</span>):
[keytar](https://github.com/atom/node-keytar)的 [CLI][]。
它最初與 [lsp-grammarly][] 一起使用，但在上游的 [grammarly-language-server][] 適應了官方 API 之後，它就過時了。
- [reverse_shell](https://github.com/jcs090218/reverse_shell) (春 2019):
以 [Python][] 實作的反向 shell。

</details>

### 🤖 AI 與機器學習

<details class="my-details">
  <summary>詳細資訊</summary>

- [shakespeare-monkey](https://gitlab.com/jcs-workspace/ai/shakespeare-monkey) (春 2024 – 夏 2024):
首次嘗試在 [Rust][] 中實作 [Genetic Algorithm][] 以證明 [Infinite Monkey Theorem][]。

</details>

### ⚙️ 靜態網站產生器

<details class="my-details">
  <summary>詳細資訊</summary>

- [SiraDoc][] (秋 2021 <span aria-label="發佈至 NPM (2)"
data-balloon-pos="up">🏅</span>):
腳本手冊的靜態文件產生器！
最初是為我的幾個遊戲框架開發的，包括 [JCSUnity][]、[JCSEgret][]、[CCosQuick][]等。

</details>

### 🏭 CI/CD 工具和自動化

<details class="my-details">
  <summary>詳細資訊</summary>

- [setup-qob](https://github.com/cl-qob/setup-qob) (冬 2024 <span aria-label="發佈至 GitHub Marketplace (6)"
data-balloon-pos="up">🏅</span>):
為 [GitHub Actions][] 工作流程安裝 [Qob][]。
- [tree-sitter-langs/update-grammars.yml](https://github.com/emacs-tree-sitter/tree-sitter-langs/blob/master/.github/workflows/update-grammars.yml) (春 2024):
透過開啟 [pull requests][PR]，自動更新 [TreeSitter][] 文法 (子模組)。
與典型的 [update_submodules.yml][] 程序不同，更新個別語法較為複雜，因此將其分割成獨立模組非常重要。
- [melpa/review-pr.yml](https://gist.github.com/jcs090218/cbbdc32ae5a1e434a434c87e7263be5a) (春 2024):
自動檢閱和評論 [MELPA][] 上的新套件拉取請求。
我已在 [melpa#8904](https://github.com/melpa/melpa/pull/8904) 中提交了拉取請求。
這標誌著第二次嘗試解決 [melpa#6714](https://github.com/melpa/melpa/issues/6714) 中的問題。
這個解決方案顯得簡單多了，完全依賴 [GitHub Actions][]，這提高了它被合併的機會。
- [update_submodules.yml][] (春 2024):
自動更新套件庫內的所有子模組，並透過開啟 [pull request][PR] 來更新套件庫。這個工作流程用於多個專案，例如 [emacs-eask/cli][]、[jcs-profile][]（本網站）等。
- [setup-emacs-windows/update-stable.yml](https://github.com/jcs090218/setup-emacs-windows/blob/master/.github/workflows/update-stable.yml) (春 2024):
自動定位 [Emacs][] 的最新版本，並透過 [拉取請求 (PR)][PR]更新程式碼。
- [setup-emacs-windows/update-snapshot.yml](https://github.com/jcs090218/setup-emacs-windows/blob/master/.github/workflows/update-snapshot.yml) (春 2024):
自動找出 [Emacs][] 的最新快照，並透過 [拉取請求 (PR)][PR] 更新程式碼。
- [setup-lem](https://github.com/lem-project/setup-lem) (秋 2023 <span aria-label="發佈至 GitHub Marketplace (5)"
data-balloon-pos="up">🏅</span>):
為 [GitHub Actions][] 工作流程安裝 [Lem][]。
- [github-push-action](https://github.com/jcs090218/github-push-action) (夏 2022 <span aria-label="貢獻者"
data-balloon-pos="up">✨</span><span aria-label="分支項目"
data-balloon-pos="up">🔗</span><span aria-label="發佈至 GitHub Marketplace (4)"
data-balloon-pos="up">🏅</span>):
分叉自 [ad-m/github-push-action](https://github.com/ad-m/github-push-action)，此分叉包含為我的自動化工作流程量身打造的 rebase 選項。
- [setup-emacs](https://github.com/jcs090218/setup-emacs) (夏 2022 <span aria-label="發佈至 GitHub Marketplace (3)"
data-balloon-pos="up">🏅</span>):
安裝指定 [Emacs][] 版本的 [Github Actions][]。本專案的目的是取代 [purcell/setup-emacs][]，
將 [purcell/setup-emacs][] 和 [setup-emacs-windows][] 兩個 [GitHub Actions][] 合而為一。因此，它現在支援所有常用的作業系統。
- [setup-eask](https://github.com/emacs-eask/setup-eask) (春 2022 <span aria-label="發佈至 GitHub Marketplace (2)"
data-balloon-pos="up">🏅</span>):
為 [Github Actions][] 工作流程安裝 [Eask][emacs-eask/cli]。
- [unity-verify-code](https://github.com/game-ci/unity-verify-code) (秋 2021 <span aria-label="發佈至 NPM (5)"
data-balloon-pos="up">🏅</span>):
電子郵件解析器可取得 6 位數驗證碼，以繞過 [TFA][]。
- [unity-license-activate](https://github.com/game-ci/unity-license-activate) (秋 2021 <span aria-label="發佈至 NPM (4)"
data-balloon-pos="up">🏅</span>):
透過 [CLI][] 啟動 [Unity][] 的個人授權。
- [setup-emacs-windows][] (秋 2020 <span aria-label="發佈至 GitHub Marketplace (1)"
data-balloon-pos="up">🏅</span>):
可安裝特定 [Emacs][] 版本的 [Github Actions][]。
本專案的靈感來自 [purcell/setup-emacs][] ，但特別致力於支援傳統的 Windows 系統。
- [package-bot](https://github.com/jcs-elpa/package-bot) (春 2020 – 秋 2020):
自動檢閱 [MELPA][] 上的新套件 PR。
由社群要求，請參考 [melpa#6714](https://github.com/melpa/melpa/issues/6714)。
雖然最終沒有被接受，但它推動社群走向更好的替代方案 - [melpazoid][]。

</details>

### ⏸️ 暫停中的專案（或許有一天會完成）

<details class="my-details">
  <summary>詳細資訊</summary>

- [flx-hs][] (春 2025):
在 [Haskell][] 中重寫 [emacs-flx][]。
- [aws-toolkit-emacs](https://github.com/jcs090218/aws-toolkit-emacs) (冬 2023):
從 Emacs 編輯器與 AWS 互動的外掛程式。
- [jcs-lem](https://github.com/jcs090218/jcs-lem) (夏 2023 – 現在):
我個人的 [lem][] 設定檔案。
[Lem][] is still in its early stages, particularly on [Windows][] systems.
- [Prevo](https://github.com/jcs090218/Prevo) (夏 2021):
使用預覽視窗預覽 `GameObject`。
- [8comic](https://github.com/jcs-elpa/8comic) (秋 2020):
使用 [8comic][] 來閱讀漫畫。
- [UCTooth](https://github.com/jcs090218/UCTooth) (夏 2020 <span aria-label="專業工作"
data-balloon-pos="up">💸</span>):
適用於 [Unity][] 的跨平台藍牙外掛，以各平台的原生程式碼實作。
- [swagger-it](https://github.com/jcs090218/swagger-it) (春 2020):
自動為專案產生 [swagger.io][] yaml 檔案。
- [CCosQuick][] (冬 2019 – 夏 2020 <span aria-label="專業工作"
data-balloon-pos="up">💸</span>):
使用建立在 [Cocos Creator][] 之上的元件驅動程式庫，輕鬆製作遊戲原型。
- [MGDP][] (秋 2019 – 冬 2019):
[Quaver][] 基本上是 [DJMax][] 的複製品；因此，我不確定是否要繼續這個專案。
  - [Client](https://gitlab.com/MGDP/Client) (封閉源碼):
  本遊戲用戶端使用 [Unity][] 引擎，旨在實現 [MGDP][] 專案的遊戲性。
  - [DevTool](https://gitlab.com/MGDP/DevTool) (封閉源碼):
  一個簡單的桌面應用程式可以協助我產生音樂存檔，然後將其部署到伺服器上。
  - [DevelopmentKit](https://www.youtube.com/watch?v=II5uaw-S6u4) (封閉源碼):
  讓 [MGDP][] 遊戲開發人員有能力創作自己的音樂遊戲，並在 [MGDP][] 平台上發行。
- [JCSUE][] (秋 2017):
利用多種元件和預先定義的預設設定，快速建構您的遊戲。
- [jcs-vim](https://github.com/jcs090218/jcs-vim) (冬 2016):
我個人的 [vim][] 配置文件。
這是我使用 [Vim][] 的初步經驗，我有興趣在未來探索 [NeoVim][]。

</details>

### 🛑 廢棄專案（永遠無法完成）

<details class="my-details">
  <summary>詳細資訊</summary>

- [tree-sitter-actionscript](https://github.com/jcs090218/tree-sitter-actionscript) (春 2021):
[ActionScript][] 文法的 [tree-sitter][]。
[Rileran][github/Rileran] 較早前已完成該專案 - [Rileran/tree-sitter-actionscript](https://github.com/Rileran/tree-sitter-actionscript)，因此，不需要再繼續進行該專案。
聲明一下，[Rileran][github/Rileran] 的專案靈感來自我的專案！
- [work-time](https://github.com/jcs-legacy/work-time) (春 2021):
您工作多久了？
我不確定它目前的值，因為它有可能被 [wakatime](https://wakatime.com/emacs) 和 [hammy.el](https://github.com/alphapapa/hammy.el) 取代。
- [organize-imports-python](https://github.com/jcs-elpa/organize-imports-python) (春 2021):
自動組織 [Python][] 程式碼中的匯入。
由於 [語言伺服器協定][LSP] 的出現，已經沒有理由再建立這個套件了。
- [vlc-player](https://github.com/jcs-legacy/vlc-player) (冬 2019):
使用 [VLC][] 播放視訊。
我記不起放棄這個功能的確切原因。我的最佳推測是 [VLC][] 不支援停止視訊的必要選項，促使我改用 [ffmpeg][]。
- [JCSEgret][] (冬 2018 <span aria-label="專業工作"
data-balloon-pos="up">💸</span>):
以 [Egret][] 引擎為基礎，專為高效率遊戲製作而設計的程式庫。該專案是在工作期間啟動的，但由於 [Egret][] 引擎在其破產後變得過時，因此已不再使用。

</details>


<!-- Links -->

[Jen-Chieh Shen]: https://jcs-profile.com/
[github/jcs090218]: https://github.com/jcs090218
[gitlab/jcs090218]: https://gitlab.com/jcs090218
[github/Milkypostman]: https://github.com/milkypostman
[github/Rileran]: https://github.com/Rileran
[github/DevelopmentCool2449]: https://github.com/DevelopmentCool2449
[github/abougouffa]: https://github.com/abougouffa
[gitlab/hirosaga]: https://gitlab.com/hirosaga
[劉明昆]: https://zh.wikipedia.org/wiki/%E5%8A%89%E6%98%8E%E6%98%86
[MingKun Liu]: https://zh.wikipedia.org/wiki/%E5%8A%89%E6%98%8E%E6%98%86

[AAU]: https://www.academyart.edu/
[Academy of Art University]: https://www.academyart.edu/
[T-NEXUS]: https://github.com/T-nexus-Studio
[GameBarley]: http://barley.games/
[WISBET]: http://www.wisbet.co/
[Meteo]: https://meteo.com.tw/
[Novaby]: https://www.novaby.com/
[嘖嘖]: https://www.zeczec.com/
[zeczec]: https://www.zeczec.com/
[zeczec/meteo]: https://www.zeczec.com/projects/meteo
[CODAworx]: https://www.codaworx.com/
[Hasbro]: https://shop.hasbro.com/
[GDC]: https://gdconf.com/
[E3 CGC]: https://e3expo.com/
[EYNY Video]: https://video.eyny.com/video
[机核GCORES]: https://www.gcores.com/
[Bunny Eats Tiger]: https://store.steampowered.com/developer/BunnyEatsTiger
[Mango Party]: https://store.steampowered.com/publisher/MangoParty

[MapleStory]: https://en.wikipedia.org/wiki/MapleStory
[DJMax]: https://en.wikipedia.org/wiki/DJMax
[MGDP]: https://gitlab.com/MGDP
[Quaver]: https://store.steampowered.com/app/980610/Quaver/
[Magic: The Gathering]: https://magic.wizards.com/en
[長姬記]: #
[ASAKU]: https://asaku.info/

[Linux]: https://en.wikipedia.org/wiki/Linux
[macOS]: https://en.wikipedia.org/wiki/MacOS
[Windows]: https://en.wikipedia.org/wiki/Microsoft_Windows
[DOS]: https://en.wikipedia.org/wiki/DOS

[Emacs]: https://www.gnu.org/software/emacs/
[Vim]: https://www.vim.org/
[NeoVim]: https://neovim.io/
[Atom]: https://atom-editor.cc/
[VSCode]: https://code.visualstudio.com/
[Visual Studio]: https://visualstudio.microsoft.com/
[Sublime Text]: https://www.sublimetext.com/
[Lem]: https://lem-project.github.io/
[Notepad++]: https://notepad-plus-plus.org/
[LÖVE]: https://love2d.org/
[Unity]: https://unity.com/
[.NET]: https://en.wikipedia.org/wiki/.NET
[Visual C#]: https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/?view=vs-2022
[Windows Forms]: https://learn.microsoft.com/en-us/dotnet/desktop/winforms/get-started/create-app-visual-studio?view=netdesktop-8.0
[Starling]: https://gamua.com/starling/
[Cocos2d-x]: https://www.cocos.com/en/cocos2d-x
[Cocos Creator]: https://www.cocos.com/en/creator
[Egret]: https://github.com/egret-labs/egret-core
[Mono]: https://www.mono-project.com/
[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[Express.js]: https://expressjs.com/
[React.js]: https://react.dev/
[DRF]: https://www.django-rest-framework.org/
[Nix]: https://nixos.org/
[NixOS]: https://nixos.org/
[nixpkgs]: https://github.com/NixOS/nixpkgs
[NUR]: https://github.com/nix-community/NUR
[Grammarly]: https://www.grammarly.com/
[Emmet]: https://emmet.io/
[GitHub]: https://github.com/
[Docker]: https://www.docker.com/
[Autoconf]: https://www.gnu.org/software/autoconf/
[VLC]: https://www.videolan.org/
[FFmpeg]: https://ffmpeg.org/
[pythonic]: https://www.udacity.com/blog/2020/09/what-is-pythonic-style.html
[pyenv]: https://github.com/pyenv/pyenv
[isort]: https://pycqa.github.io/isort/
[Django]: https://www.djangoproject.com/
[Anaconda]: https://www.anaconda.com/
[Processing]: https://processing.org/
[Bluetooth]: https://en.wikipedia.org/wiki/Bluetooth
[Pygame]: https://en.wikipedia.org/wiki/Pygame
[Qt Jami]: https://wiki.qt.io/Qt_Jambi
[Apache Mina]: https://mina.apache.org/
[LiteNetLib]: https://github.com/RevenantX/LiteNetLib
[FishNet]: https://github.com/FirstGearGames/FishNet
[swagger.io]: https://swagger.io/
[EditorConfig]: https://editorconfig.org/
[Chrome]: https://www.google.com/chrome/
[Brave]: https://brave.com/

[Hexo]: https://hexo.io/index.html
[Hugo]: https://gohugo.io/

[GitHub Actions]: https://github.com/features/actions
[GHA]: https://github.com/features/actions
[GitHub Pages]: https://pages.github.com/

[ActionScript]: https://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/index.html
[AS3]: https://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/index.html
[AppleScript]: https://en.wikipedia.org/wiki/AppleScript
[Batch]: https://en.wikipedia.org/wiki/Batch_file
[C]: https://en.wikipedia.org/wiki/C_(programming_language)
[C++]: https://en.wikipedia.org/wiki/C%2B%2B
[CPP]: https://en.wikipedia.org/wiki/C%2B%2B
[C#]: https://en.wikipedia.org/wiki/C_Sharp_(programming_language)
[Common Lisp]: https://lisp-lang.org/
[Clojure]: https://clojure.org/
[CoffeeScript]: https://coffeescript.org/
[Dart]: https://dart.dev/
[Emacs Lisp]: https://www.gnu.org/software/emacs/manual/html_node/eintr/
[Elisp]: https://www.gnu.org/software/emacs/manual/html_node/eintr/
[GDScript]: https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html
[Go]: https://go.dev/
[Haskell]: https://www.haskell.org/
[Haxe]: https://haxe.org/
[JayCeS]: https://github.com/jayces-lang/jayces
[Java]: https://www.java.com/en/
[Python]: https://www.python.org/
[PyPi]: https://pypi.org/
[Rust]: https://www.rust-lang.org/
[Cargo]: https://crates.io/
[Lisp]: https://en.wikipedia.org/wiki/Lisp_(programming_language)
[Common Lisp]: https://en.wikipedia.org/wiki/Common_Lisp
[Lua]: https://www.lua.org/
[Markdown]: https://en.wikipedia.org/wiki/Markdown
[Make]: https://www.gnu.org/software/make/manual/make.html
[MySQL]: https://www.mysql.com/
[HTML]: https://en.wikipedia.org/wiki/HTML
[CSS]: https://en.wikipedia.org/wiki/CSS
[JavaScript]: https://en.wikipedia.org/wiki/JavaScript
[JSON]: https://www.json.org/json-en.html
[TypeScript]: https://www.typescriptlang.org/
[PHP]: https://www.php.net/
[Qt Style Sheets]: https://doc.qt.io/qt-6/stylesheet-reference.html
[Objective-C]: https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjectiveC/Introduction/introObjectiveC.html
[Swift]: https://www.swift.org/
[XML]: https://en.wikipedia.org/wiki/XML
[YAML]: https://yaml.org/
[Zig]: https://ziglang.org/

[Cask]: https://github.com/cask/cask
[Eask]: https://emacs-eask.github.io/
[emacs-eask/cli]: https://github.com/emacs-eask/cli
[emacs-eask/archives]: https://github.com/emacs-eask/archives
[emacs-eask/packaging]: https://github.com/emacs-eask/packaging
[Chocolatey]: https://chocolatey.org/
[Scoop]: https://scoop.sh/
[Homebrew]: https://brew.sh/
[MacPorts]: https://www.macports.org/
[Qob]: https://cl-qob.github.io/
[cl-qob/cli]: https://github.com/cl-qob/cli
[cl-qob/packaging]: https://github.com/cl-qob/packaging
[Snapcraft]: https://snapcraft.io/store
[PPA]: https://help.ubuntu.com/stable/ubuntu-help/addremove-ppa.html

[shader-language-server]: https://github.com/shader-ls/shader-language-server
[ShaderLab]: https://docs.unity3d.com/Manual/SL-Reference.html
[HLSL]: https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl
[GLSL]: https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language
[Cg]: https://en.wikipedia.org/wiki/Cg_(programming_language)

[unofficial-grammarly-language-server]: https://github.com/emacs-grammarly/unofficial-grammarly-language-server
[grammarly-language-server]: https://github.com/emacs-grammarly/grammarly-language-server
[ltex-ls]: https://github.com/valentjn/ltex-ls
[ltex-ls-plus]: https://github.com/ltex-plus/ltex-ls-plus
[languagetool-languageserver]: https://github.com/languagetool-language-server/languagetool-languageserver
[Cogru]: https://github.com/Cogru/cogru

[32feet]: https://github.com/inthehand/32feet
[CCosQuick]: https://github.com/jcs090218/CCosQuick
[JCSUnity]: https://github.com/jcs090218/JCSUnity
[Unity.Mx]: https://github.com/jcs090218/Unity.Mx
[JCSStarling]: https://gitlab.com/jcs-workspace/as3/JCSStarling
[JCSUE]: https://github.com/jcs090218/JCSUE
[JCSEgret]: https://github.com/jcs090218/JCSEgret
[JCSGodot]: https://github.com/jcs090218/JCSGodot
[JCSPyGm_Lib]: https://github.com/jcs090218/JCSPyGm_Lib
[ImpulseEngine]: https://github.com/jcs090218/ImpulseEngine
[JCSLOVELua]: https://github.com/jcs090218/JCSLOVELua
[PetShop]: https://github.com/jcs090218/PetShop
[JCSCos2x_Lib]: https://github.com/jcs090218/JCSCos2x_Lib_src
[JCSCC_Engine]: https://github.com/jcs090218/JCSCC_Engine
[JCSNetS]: https://github.com/jcs090218/JCSNetS
[BB_Shoot]: https://www.youtube.com/watch?v=99XotNo86wI
[JCSQtJ]: https://github.com/jcs090218/JCSQtJ
[Guild-Emblem-Simulator]: https://github.com/jcs090218/Guild-Emblem-Simulator
[OC_Install]: https://gitlab.com/jcs-workspace/Java/OC_Install
[JCSNetP]: https://github.com/jcs090218/JCSNetP
[Impulse Engine]: https://github.com/tutsplus/ImpulseEngine
[API_Reference_Template]: https://github.com/jcs-legacy/API_Reference_Template
[Blog_Template]: https://github.com/jcs-legacy/Blog_Template
[SiraDoc]: https://gitlab.com/SiraDoc/SiraDoc
[jcs-profile]: https://github.com/jcs090218/jcs-profile/
[melpazoid]: https://github.com/riscy/melpazoid
[searcher]: https://github.com/jcs-elpa/searcher
[ag]: https://github.com/ggreer/the_silver_searcher
[rg]: https://github.com/BurntSushi/ripgrep
[grep]: https://savannah.gnu.org/git/?group=grep
[auto-complete]: https://github.com/auto-complete/auto-complete
[helm]: https://github.com/emacs-helm/helm
[ivy]: https://github.com/abo-abo/swiper
[counsel]: https://github.com/abo-abo/swiper
[swiper]: https://github.com/abo-abo/swiper
[vertico]: https://github.com/minad/vertico
[tabulated-list]: https://www.gnu.org/software/emacs/manual/html_node/elisp/Tabulated-List-Mode.html
[company]: https://github.com/company-mode/company-mode
[company-mode]: https://github.com/company-mode/company-mode
[ElDoc]: https://www.emacswiki.org/emacs/ElDoc
[emacs-dashboard]: https://github.com/emacs-dashboard/emacs-dashboard
[emacs-flx]: https://github.com/lewang/flx
[flxy-rs]: https://github.com/jcs-legacy/flxy-rs
[fuz.el]: https://github.com/rustify-emacs/fuz.el
[jcs-elpa/flx-rs]: https://github.com/jcs-elpa/flx-rs
[the-flx/flx-rs]: https://github.com/the-flx/flx-rs
[flycheck]: https://github.com/flycheck/flycheck
[flymake]: https://www.gnu.org/software/emacs/manual/html_mono/flymake.html
[lsp-mode]: https://github.com/emacs-lsp/lsp-mode
[lsp-java]: https://github.com/emacs-lsp/lsp-java
[lsp-grammarly]: https://github.com/emacs-grammarly/lsp-grammarly
[keytar-cli]: https://github.com/emacs-grammarly/keytar-cli
[keytar]: https://github.com/emacs-grammarly/keytar
[LanguageTool]: https://languagetool.org/
[eglot]: https://github.com/joaotavora/eglot
[quelpa]: https://github.com/quelpa/quelpa
[Elsa]: https://github.com/emacs-elsa/Elsa
[ecukes]: https://github.com/ecukes/ecukes
[origami.el]: https://github.com/elp-revive/origami.el
[elisp-tree-sitter]: https://github.com/emacs-tree-sitter/elisp-tree-sitter
[tree-sitter-langs]: https://github.com/emacs-tree-sitter/tree-sitter-langs
[ts-fold]:https://github.com/emacs-tree-sitter/ts-fold
[codemetrics]: https://github.com/emacs-vs/codemetrics
[TreeSitter]: https://tree-sitter.github.io/tree-sitter/
[tree-sitter]: https://tree-sitter.github.io/tree-sitter/
[auto-close-block]: https://github.com/emacs-vs/auto-close-block
[meta-net]: https://github.com/emacs-vs/meta-net
[sideline]: https://github.com/emacs-sideline/sideline
[emacs-openai/chatgpt]: https://github.com/emacs-openai/chatgpt
[multiple-cursors]: https://github.com/magnars/multiple-cursors.el
[manage-minor-mode]: https://github.com/emacsorphanage/manage-minor-mode
[focus]: https://github.com/larstvei/Focus
[Emojify]: https://github.com/iqbalansari/emacs-emojify
[powershell.el]: https://github.com/jschaf/powershell.el
[powershell-mode]: https://github.com/jschaf/powershell.el
[nerd-icons]: https://github.com/rainstormstudio/nerd-icons.el
[python-mode]: https://gitlab.com/python-mode-devs/python-mode
[sherlock-project/sherlock]: https://github.com/sherlock-project/sherlock
[sherlock-project/api]: https://github.com/sherlock-project/api
[colorama]: https://pypi.org/project/colorama/
[cpplint]: https://github.com/cpplint/cpplint
[cppcheck]: https://cppcheck.sourceforge.io/
[PHP_CodeSniffer]: https://github.com/squizlabs/PHP_CodeSniffer
[Perl::Critic]: https://metacpan.org/pod/Perl::Critic
[GitGutter]: https://packagecontrol.io/packages/GitGutter
[ws]: https://www.npmjs.com/package/ws
[ziglint]: https://github.com/nektro/ziglint
[org-mode]: https://orgmode.org/

[purcell/setup-emacs]: https://github.com/purcell/setup-emacs
[setup-emacs-windows]: https://github.com/jcs090218/setup-emacs-windows

[jcs-emacs]: https://github.com/jcs-emacs/jcs-emacs
[jcs-template]: https://github.com/jcs-emacs/jcs-template
[jcs-poptip]: https://github.com/jcs-emacs/jcs-poptip
[jcs-echobar]: https://github.com/jcs-emacs/jcs-echobar
[jcs-frametitle]: https://github.com/jcs-emacs/jcs-frametitle
[jcs-modeline]: https://github.com/jcs-emacs/jcs-modeline
[doomemacs]: https://github.com/doomemacs/doomemacs

<!-- Archives -->
[ELPA]: https://www.emacswiki.org/emacs/ELPA
[jcs-elpa]: https://github.com/jcs-emacs/jcs-elpa
[MELPA]: https://melpa.org/
[Quicklisp]: https://www.quicklisp.org/beta/
[Ultralisp]: https://ultralisp.org/
[NuGet]: https://www.nuget.org/
[crates.io]: https://crates.io/

[cl-flx]: https://github.com/the-flx/cl-flx
[clj-flx]: https://github.com/the-flx/clj-flx
[flx.go]: https://github.com/the-flx/flx.go
[flx.py]: https://github.com/the-flx/flx.py
[flx-java]: https://github.com/the-flx/flx-java
[flx-zig]: https://github.com/the-flx/flx-zig
[flx-c]: https://github.com/the-flx/flx-c
[flx_dart]: https://github.com/the-flx/flx_dart
[flx-ts]: https://github.com/the-flx/flx-ts
[zig-flx]: https://github.com/the-flx/zig-flx
[FlxCs]: https://github.com/the-flx/FlxCs
[FlxSwift]: https://github.com/the-flx/FlxSwift
[flx-hs]: https://github.com/the-flx/flx-hs

[API]: https://en.wikipedia.org/wiki/API
[AR]: https://en.wikipedia.org/wiki/Augmented_reality
[VR]: https://en.wikipedia.org/wiki/Virtual_reality
[MR]: https://en.wikipedia.org/wiki/Mixed_reality
[CLI]: https://en.wikipedia.org/wiki/Command-line_interface
[LSP]: https://microsoft.github.io/language-server-protocol/
[DAP]: https://microsoft.github.io/debug-adapter-protocol/
[CSP]: https://cogru.github.io/collaboration-server-protocol/
[regex]: https://en.wikipedia.org/wiki/Regular_expression
[CSV]: https://en.wikipedia.org/wiki/Comma-separated_values
[TSV]: https://en.wikipedia.org/wiki/Tab-separated_values
[SSG]: https://en.wikipedia.org/wiki/Static_site_generator
[HTTP]: https://en.wikipedia.org/wiki/HTTP

[ASCII]: https://en.wikipedia.org/wiki/ASCII
[alt codes]: https://www.alt-codes.net/
[EOL]: https://en.wikipedia.org/wiki/Newline
[PNG]: https://en.wikipedia.org/wiki/PNG
[Parser]: https://en.wikipedia.org/wiki/Parsing
[Parsing]: https://en.wikipedia.org/wiki/Parsing
[auth-source]: https://www.gnu.org/software/emacs/manual/html_mono/auth.html
[completion-style]: https://www.gnu.org/software/emacs/manual/html_node/emacs/Completion-Styles.html
[completion styles]: https://www.gnu.org/software/emacs/manual/html_node/emacs/Completion-Styles.html
[compilation-mode]: https://www.gnu.org/software/emacs/manual/html_node/emacs/Compilation-Mode.html
[major-mode]: https://www.gnu.org/software/emacs/manual/html_node/emacs/Major-Modes.html
[minibuffer]: https://www.gnu.org/software/emacs/manual/html_node/emacs/Minibuffer.html
[buffer-menu]: https://www.emacswiki.org/emacs/BufferMenu
[isearch]: https://www.gnu.org/software/emacs/manual/html_node/emacs/Incremental-Search.html
[truncate-lines]: https://www.emacswiki.org/emacs/TruncateLines
[recentf]: https://www.emacswiki.org/emacs/RecentFiles
[undo-tree]: https://www.emacswiki.org/emacs/UndoTree
[PR]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
[NDA]: https://en.wikipedia.org/wiki/Non-disclosure_agreement
[MVP]: https://en.wikipedia.org/wiki/Minimum_viable_product
[TFA]: https://en.wikipedia.org/wiki/Multi-factor_authentica
[MMO]: https://en.wikipedia.org/wiki/Massively_multiplayer_online_game
[RPG]: https://en.wikipedia.org/wiki/Role-playing_gametion
[MOBA]: https://en.wikipedia.org/wiki/Multiplayer_online_battle_arena
[TPS]: https://en.wikipedia.org/wiki/Third-person_shooter
[client-server model]: https://en.wikipedia.org/wiki/Client%E2%80%93server_model
[Operational Transformation (OT)]: https://en.wikipedia.org/wiki/Operational_transformation
[hack & slash]: https://en.wikipedia.org/wiki/Hack_and_slash
[tile-matching]: https://en.wikipedia.org/wiki/Tile-matching_video_game
[IAP]: https://developer.apple.com/in-app-purchase/
[AssetBundles]: https://docs.unity3d.com/Manual/AssetBundlesIntro.html
[EditorPrefs]: https://docs.unity3d.com/ScriptReference/EditorPrefs.html
[PlayerPrefs]: https://docs.unity3d.com/ScriptReference/PlayerPrefs.html
[InspectorWindow]: https://docs.unity3d.com/Manual/UsingTheInspector.html
[HierarchyWindow]: https://docs.unity3d.com/Manual/Hierarchy.html
[Shader Graph]: https://docs.unity3d.com/Manual/shader-graph.html
[Built-in RP]: https://docs.unity3d.com/Manual/render-pipelines.html
[URP]: https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@17.0/manual/index.html
[HDRP]: https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@17.0/manual/index.html
[NavMesh Link]: https://docs.unity3d.com/560/Documentation/Manual/class-NavMeshLink.html
[FontAwesome]: https://fontawesome.com/
[WAV]: https://en.wikipedia.org/wiki/WAV
[websocket]: https://en.wikipedia.org/wiki/WebSocket
[Table of contents]: https://en.wikipedia.org/wiki/Table_of_contents
[Screensaver]: https://en.wikipedia.org/wiki/Screensaver

[Cognitive Complexity]: https://www.sonarsource.com/docs/CognitiveComplexity.pdf
[Infinite monkey theorem]: https://en.wikipedia.org/wiki/Infinite_monkey_theorem
[Genetic Algorithm]: https://en.wikipedia.org/wiki/Genetic_algorithm

[Copilot]: https://github.com/features/copilot
[OpenAI]: https://openai.com/
[ChatGPT]: https://chat.openai.com/
[DALL-E]: https://openai.com/dall-e-2
[Google Gemini]: https://gemini.google.com/
[DEEPL]: https://www.deepl.com/en/translator
[UniteAI]: https://github.com/freckletonj/uniteai
[GPTScript]: https://github.com/gptscript-ai/gptscript

[update_submodules.yml]: https://gist.github.com/jcs090218/626ce162eff2cbf928a257647aa201bc

[8comic]: https://v.comicabc.com/
[Emoji]: https://en.wikipedia.org/wiki/Emoji
[kaomoji]: https://en.wikipedia.org/wiki/Kaomoji

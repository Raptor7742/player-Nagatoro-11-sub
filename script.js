const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Arrête de me chauffer, Nagatoro  - épisode 11 VOSTFR",
      description: "Vous regardez",
      image: "https://cdn.statically.io/gh/Anime-Sama/IMG/img/animes/animes%20wallpapers/ijiranaide-nagatorocarousel.jpg",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m202.syncusercontent.com/mfs-60:daeb8b0efe391248d41454e6ba7bc03e=============================/p/épisode%2011.mp4?allowdd=0&datakey=UNawvKsDIpptg4Jl++4JxkMY85wVzgec413MNVsaCDgk6Qho/1ak1r79t1m1rlXyIIze0YxbWDlVp4nS/10l7WodDIsad3hGOEpMVoPwIIX3hkvbgBk6rWfk/5d9XdiXkw/5Y37pfj8tYkufzE63VNJK0MCUw8quF13PvaPlFKNP4Tk6FWDsjnY16Y/5aDOn+rserntG8a6q4hXOyybEPdu3hSapqyOrbNmdMINZDslTvMs8zgpgGDpDZ6Ts+YB5Qp+JneK2X63Pbk9GRmSqcbPe/YzXSfOvEI9nfABy05Lm7pcFdGIe8Q3gaSBElzKy+Le6BZqYEjniTvtpXMO5hg&engine=ln-2.3.7.3&errurl=bXo1aPKIdFnBeMTysbREMY18XU9XHijSCLGoqhUNjYGGvYriJyAwSgUd303bDsJfAcT77cQh2WmqYQ9dwy6SAxbEfNyb+AHoOavDza7ZdJkIHkQ2JWtnkJLcfkp2x0vmikF5bUnYD/2ASbW0j9WOlC8qUahwF3Gih+yg54nPOEiGxTdE4Jj9Yw7R/9cloavM29lFHa+CVpqWzLAPrXNF8IU0LuV+7MTml+FmvzrtLpxEMaYobusXr9+QdyCotoJcmJrcOO/379i8El87aYO+yeNvzTN1kl1v8kX7WQ7G6PxPQuTcn/rIU9zKPCwyEbfnDoOc+CFdXTQaAhFsZGNDbA==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iJUMzJUE5cGlzb2RlJTIwMTEubXA0IjtmaWxlbmFtZSo9VVRGLTgnJyVDMyVBOXBpc29kZSUyMDExLm1wNDs&ipaddress=1458994159&linkcachekey=943ccd6e0&linkoid=1982890011&mode=101&sharelink_id=9628514980011&timestamp=1672610103768&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=a385a37db1ab1948fa67989c8d12388bc7b4082c&cachekey=60:daeb8b0efe391248d41454e6ba7bc03e=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});

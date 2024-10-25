import { useRef, useState } from "react";
import {
  MediaPlayer,
  MediaProvider,
  type MediaPlayerInstance,
} from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

export default function VidstackPlayer() {
  const player = useRef<MediaPlayerInstance>(null);
  const [canPlay, setCanPlay] = useState<boolean>(false);

  const handlePlay = () => {
    player.current?.play();
  };

  return (
    <>
      <MediaPlayer
        ref={player}
        className="video-container"
        src="https://assets.handstandwith.us/jidara/jidara-finale-mobile.mp4"
        playsInline
        crossOrigin
        keyDisabled
        onCanPlay={() => setCanPlay(true)}
        fullscreenOrientation="any"
        controlsDelay={99999999999}
      >
        <MediaProvider />
        <DefaultVideoLayout
          disableTimeSlider
          icons={defaultLayoutIcons}
          slots={{
            beforePlayButton: null,
            volumeSlider: null,
            playButton: null,
            afterPlayButton: null,
            settingsMenu: null,
            fullscreenButton: null,
            startDuration: null,
            captions: null,
          }}
        />
      </MediaPlayer>
      {canPlay && (
        <button
          onClick={handlePlay}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            cursor: "pointer",
            zIndex: 100,
            color: "black",
          }}
          className="hover:opacity-90"
        >
          Play
        </button>
      )}
    </>
  );
}

import { Box, Button, Slider, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { useState, useRef } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
    audioRef.current.volume = value / 100;
  };

  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
      <audio ref={audioRef} src="path_to_music_file.mp3" preload="metadata"></audio>
      <Box>
        <Button onClick={() => audioRef.current.currentTime -= 10}><FaBackward /></Button>
        <Button onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
        <Button onClick={() => audioRef.current.currentTime += 10}><FaForward /></Button>
      </Box>
      <Slider aria-label="volume-slider" value={volume} min={0} max={100} onChange={handleVolumeChange}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </VStack>
  );
};

export default Index;
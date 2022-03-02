import styled from "styled-components";

const SongContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Song = () => {
  return (
    <SongContainer>
      <h1>picture</h1>
      <h1>song name</h1>
      <h1>artist</h1>
    </SongContainer>
  );
};

export default Song;

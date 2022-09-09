import styled from '@emotion/styled';
import Wave from "react-wavify";


const WaveContainer = styled.div`
position: absolute;
left: 0;
right: 0;
top: 250px;
height: ${props => props.level + 'vh'};
display: flex;
z-index: -1;
transform: rotate(180deg);
`;
export default function Waves() {
  return(
    <>
    <WaveContainer level={90}>
    <Wave
      fill="#E3BF3E"
      paused={false}
      opacity="0.30"
      options={{
        height: 25,
        amplitude: 15,
        speed: 0.3,
        points: 3,
      }}
    />
  </WaveContainer>
  <WaveContainer level={90}>
    <Wave
      fill="#E3BF3E"
      opacity="0.80"
      paused={false}
      options={{
        height: 80,
        amplitude: 25,
        speed: 0.4,
        points: 2,
      }}
    />
  </WaveContainer>
  <WaveContainer level={90}>
    <Wave
      fill="#E3BF3E"
      paused={false}
      opacity="0.5"
      options={{
        height: 50,
        amplitude: 35,
        speed: 0.2,
        points: 4,
      }}
    />
  </WaveContainer>
  </>
  )
  
}
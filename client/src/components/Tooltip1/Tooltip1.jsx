import { Box, Button, keyframes, useColorModeValue } from '@chakra-ui/react';
import { FaQuestion } from 'react-icons/fa';

export function Tooltip1(props) {
  const size = props.size;
  const color = useColorModeValue('yellow.400', 'yellow');

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Box
      as="div"
      ml={{ base: '1rem', md: '38rem' }}
      position="relative"
      w={size}
      h={size}
      _before={{
        content: "''",
        position: 'relative',
        display: 'block',
        width: '300%',
        height: '300%',
        boxSizing: 'border-box',
        marginLeft: '-100%',
        marginTop: '-100%',
        borderRadius: '50%',
        bgColor: color,
        animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
      }}
    >
      <Button
        pos={'absolute'}
        width="full"
        h="full"
        top="0"
        variant={'ghost'}
        borderRadius="full"
        bgColor={useColorModeValue('gray.300', 'gray.900')}
      >
        <FaQuestion
          size="1.1rem"
          pb="10rem"
          color={useColorModeValue('black', 'white')}
        />
      </Button>
    </Box>
  );
}

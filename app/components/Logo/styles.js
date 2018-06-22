import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    $largeContainerSize: imageWidth,
    $smallContainerSize: imageWidth / 2,

    $largeImageSize: imageWidth / 2,
    $smallImageSize: imageWidth / 4,

    $largeImageTop: imageWidth / 4,
    $smallImageTop: 0,

    $largeImageTranslateY: 0,
    $smallImageTranslateY: -imageWidth / 4,


    container: {
      alignItems: 'center',
    },
    containerImage: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '$largeContainerSize',
      height: '$largeContainerSize',
    },
    logo: {
      height: '$largeImageSize',
      position: 'absolute',
      top: '$largeImageTop',
      transform: [{ translateY: '$largeImageTranslateY' }],
    },
    text: {
      fontWeight: '600',
      fontSize: 28,
      letterSpacing: -0.5,
      marginTop: 20,
      color: '$white'
    }
});

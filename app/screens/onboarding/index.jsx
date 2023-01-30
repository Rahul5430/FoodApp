import { Text, View } from 'react-native';
import Video from 'react-native-video';

const OnBoarding = () => {
    return (
        <View>
            <Video
                source={require('../../../assets/bg_video.mp4')}
                muted={true}
                repeat={true}
                resizeMode={'cover'}
                rate={1.0}
                ignoreSilentSwitch={'obey'}
            />
        </View>
    );
};

export default OnBoarding;

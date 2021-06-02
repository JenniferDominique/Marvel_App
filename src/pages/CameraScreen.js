// https://github.com/LordShiroe/AwesomeCamera

import React, {PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';

import {TouchableOpacity, Alert, StyleSheet} from 'react-native';

export default class Camera extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      takingPic: false,
      box: null,
      leftEyePosition: null,
      rightEyePosition: null,
    };
  }

  takePicture = async () => {
    if (this.camera && !this.state.takingPic) {
      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
      };

      this.setState({takingPic: true});

      try {
        const data = await this.camera.takePictureAsync(options);
        this.setState({takingPic: false}, () => {
          this.props.onPicture(data);
        });
      } catch (err) {
        this.setState({takingPic: false});
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        return;
      }
    }
  };

  onFaceDetected = ({faces}) => {
    if (faces[0]) {
      this.setState({
        box: {
          width: faces[0].bounds.size.width,
          height: faces[0].bounds.size.height,
          x: faces[0].bounds.origin.x,
          y: faces[0].bounds.origin.y,
          yawAngle: faces[0].yawAngle,
          rollAngle: faces[0].rollAngle,
        },
        rightEyePosition: faces[0].rightEyePosition,
        leftEyePosition: faces[0].leftEyePosition,
      });
    } else {
      this.setState({
        box: null,
        rightEyePosition: null,
        leftEyePosition: null,
      });
    }
  };

  render() {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        captureAudio={false}
        style={{flex: 1}}
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
        type={RNCamera.Constants.Type.front}
        onFacesDetected={this.onFaceDetected}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnAlignment}
          onPress={this.takePicture}>
          <Image
            source={{
              uri:
                'https://img.icons8.com/carbon-copy/2x/camera--v1.png',
            }}
            style={styles.img}
          />
        </TouchableOpacity>
      </RNCamera>
    );
  }
}

const styles = StyleSheet.create({
  btnAlignment: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },

  img: {
    height: 20,
    width: 20,
  },
});
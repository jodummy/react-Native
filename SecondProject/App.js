import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      //묶어주기 text view로 묶어주기
      //style을 사용하기 위해서 직접 넣어주면 {{}} 두개 사용 불러오기는 하나 사용
      <View style={styles.container}>
        <Text>
          the quick
          {/*<Text style={{ fontStyle: "italic" }}>brown</Text> 코드가 지저분하다 밑으로 빼주자*/}
          <Text style={styles.bold} >스타일 적용 </Text>
          fox lazy
          <Text style={styles.italic} >dog 적용 </Text>
          {/*<Text style={{ fontWeight: "bold" }}>cat</Text>*/}
          {/* 이미지 삽입*/}
          <Image source={require("./logo.png")}
            style={{ width: 375, height: 600 }} />
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  }
});


import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class DeletePage extends Component {
  render() {
    return (
      <View>
        <Text>Delete Page</Text>
        <TouchableOpacity onPress={() => this.props.backToMainPage("main")}>
          <Text style={{ margin: 10, backgroundColor: "red" }}>
            Back To Main Page
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeletePage;

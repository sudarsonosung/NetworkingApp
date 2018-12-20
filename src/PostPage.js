import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import Axios from "axios";

class PostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      isLoading: false,
      statusMessage: ""
    };
  }

  postNote = () => {
    const url = "http://api.codefazz.com/api/Notes";
    const { title, description, isLoading } = this.state;

    if (title === "") {
      Alert.alert("Warning", "Title cannot be empty!");
      return;
    }

    const dataPayload = {
      title: title,
      content: description
    };

    Axios.post(url, dataPayload)
      .then(response => {
        console.log(response);
        this.setState({
          isLoading: false,
          statusMessage: "POST Request success!"
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
          statusMessage: "POST Request failed!"
        });
      });
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder="Title"
          onChangeText={txt => this.setState({ title: txt })}
          style={{ width: "90%", backgroundColor: "yellow" }}
        />
        <TextInput
          placeholder="Description"
          onChangeText={txt => this.setState({ description: txt })}
          style={{ width: "90%", backgroundColor: "yellow" }}
        />
        <Text>Post Page</Text>
        <TouchableOpacity onPress={() => this.postNote()}>
          <Text style={{ margin: 10, backgroundColor: "red" }}>
            Post My Note
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.backToMainPage("main")}>
          <Text style={{ margin: 10, backgroundColor: "red" }}>
            Back To Main Page
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PostPage;

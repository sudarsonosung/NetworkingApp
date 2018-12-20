import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from "react-native";
import axios from "axios";

class GetNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNotes: [],
      isLoading: false
    };
  }

  getNotes = () => {
    this.setState({ isLoading: true });
    const url = "http://api.codefazz.com/api/Notes";
    axios
      .get(url)
      .then(response => {
        console.log(response);
        this.setState({
          dataNotes: response.data,
          isLoading: false
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { dataNotes, isLoading } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>Get Notes</Text>
        {isLoading && <ActivityIndicator size="large" />}
        <TouchableOpacity onPress={() => this.getNotes()}>
          <Text style={{ margin: 10, backgroundColor: "red" }}>
            Get Notes Data Button!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.backToMainPage("main")}>
          <Text style={{ margin: 10, backgroundColor: "red" }}>
            Back To Main Page
          </Text>
        </TouchableOpacity>

        {/* {this.state.dataNotes.map((note, idx) => {
          <Text key={note.id}>
            {idx} - {note.title}
          </Text>;
        })} */}

        <FlatList
          data={this.state.dataNotes}
          renderItem={({ item, index }) => (
            <View
              style={{
                backgroundColor: "yellow",
                borderRadius: 3,
                borderColor: "red",
                borderWidth: 1,
                margin: 10
              }}
            >
              {console.log(item)}
              <Text>
                {index} - {item.title}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default GetNotes;

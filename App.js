import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Switch,
} from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (

    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.topRow}>
        <Text style={[styles.title, isDarkMode && styles.darkTitle]}>Tehtävä Lista</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          style={styles.toggleSwitch}
          thumbColor={isDarkMode ? '#FFFFFF' : '#000000'}
        />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={[styles.tasksWrapper, isDarkMode && styles.darkTasksWrapper]}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Tämän päivän tehtävät</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.writeTaskWrapper, isDarkMode && styles.darkWriteTaskWrapper]}
      >
        <TextInput
          style={[styles.input, isDarkMode && styles.darkInput]}
          placeholder={'Lisää tehtävä'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={[styles.addWrapper, isDarkMode && styles.darkAddWrapper]}>
            <Text style={[styles.addText, isDarkMode && styles.darkAddText]}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  darkBackground: {
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: '#2b2b2b',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  darkTitle: {
    color: '#FFFFFF',
  },
  toggleSwitch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  darkTasksWrapper: {
    backgroundColor: '#2b2b2b',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  darkSectionTitle: {
    color: '#FFFFFF',
  },
  items: {
    marginTop: 30,

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  darkWriteTaskWrapper: {
    backgroundColor: '#2b2b2b',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  darkInput: {
    backgroundColor: '#FFF',
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  darkAddWrapper: {
    backgroundColor: '#2b2b2b',
    borderColor: '#FFFFFF',
  },
  addText: {
    color: '#2b2b2b',
  },
  darkAddText: {
    color: '#FFFFFF',
  },
});



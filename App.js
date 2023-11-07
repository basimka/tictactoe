import { StatusBar } from 'expo-status-bar';
import { useState} from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function App() {

  const [notification, setNotification] = useState("Player X to start")
  const [refresh, setRefresh] = useState(false)
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const pressField = (index) =>{
    let newBoard = board
    if(newBoard[index] !== "X" && newBoard[index] !== "O"){
      if (currentPlayer == "X"){
        newBoard[index] = "X"
        setCurrentPlayer("O")
        setNotification("Player O turn")
      }else{
        newBoard[index] = "O"
        setCurrentPlayer("X")
        setNotification("Player X turn")
      }
      setBoard(newBoard)
      setRefresh(!refresh)
      checkIfPlayerWin()
    }
      

    
  const checkIfPlayerWin = () => {
    if (board[0] == board[1] && board[1] == board[2] && board[0] !== " "){
      playerWon(board[0])
    }else if (board[3] == board[4] && board[4] == board[5] && board[3] !== " "){
      playerWon(board[3])
    }else if (board[6] == board[7] && board[7] == board[8] && board[6] !== " "){
      playerWon(board[6])
    }else if (board[0] == board[4] && board[4] == board[8] && board[0] !== " "){
      playerWon(board[0])
    }else if (board[0] == board[3] && board[3] == board[6] && board[0] !== " "){
      playerWon(board[0])
    }else if (board[1] == board[4] && board[4] == board[7] && board[1] !== " "){
      playerWon(board[1])
    }else if (board[2] == board[4] && board[4] == board[6] && board[2] !== " "){
      playerWon(board[2])
    }else if (board[2] == board[5] && board[5] == board[8] && board[2] !== " "){
      playerWon(board[2])
    }
  }
  }

  const playerWon = (Symbol) => {
    alert("Player " + Symbol + " WON")
    setBoard(
      [
        " "," "," ",
        " "," "," ",
        " "," "," ",
      ])
  }

  const [board, setBoard] = useState(
    [
      " "," "," ",
      " "," "," ",
      " "," "," ",
    ]
  )
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.txt1}>TicTacToe</Text>
      <Text style={styles.txt2}>{notification}</Text>
      <FlatList 
      style={styles.list} 
      data={board} 
      numColumns={3} 
      extraData={refresh}
      renderItem={({item, index}) =>(
        <TouchableOpacity style={styles.square} onPress={()=>pressField(index)}>
          <Text>{item}</Text>
        </TouchableOpacity>
      )}/>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt1:{
    fontSize:50,
  },
  txt2:{
    fontSize:20,

  },
  button1:{
    backgroundColor:'blue',
    fontSize:45,
    padding:5,
    borderRadius: 10,
  },
  list:{
    fontSize:45,    
    width:300,
    height:300,
  },
  square:{
    backgroundColor:"blue",
    height:60,
    width:40,
    margin:10,

  }
});

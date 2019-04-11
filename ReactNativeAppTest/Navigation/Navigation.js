import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

export default createAppContainer(SearchStackNavigator)

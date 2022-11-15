import Card from '../../UI/Card/Card'
import styles from './ListUsers.module.css'

const ListUsers = props => {
  return (
    <Card className={styles.users}>
      {props.userListData.length > 0 && 
        <ul>
          {props.userListData.map((list, i) => 
            <li key={i}>{list.username} {list.age} Years old</li>
          )}
        </ul>
      }
    </Card>
  )
}

export default ListUsers
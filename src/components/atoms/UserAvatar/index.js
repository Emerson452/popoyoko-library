import './index.css'

export const UserAvatar = ({big, ...rest }) => {



    return (
        <img {...rest} className={big ? "big" : "small"} alt="avatar" src="https://images.pexels.com/photos/9665516/pexels-photo-9665516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
    )
}

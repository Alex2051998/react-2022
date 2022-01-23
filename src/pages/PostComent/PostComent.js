export default function PostComent({item}){
    let {userId, id, title, body} = item;
    return(
        <div>
            <div>
                UserId {userId}
            </div>
            <div>
                Id {id}
            </div>
            <div>
                Title {title}
            </div>
            <div>
                Body {body}
            </div>

        </div>
    )

}
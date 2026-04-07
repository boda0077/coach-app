export default function Button(props) {
    return (
        <a href={props.href} className={`bg-greenNeon text-surface py-2 px-7 font-medium uppercase rounded-sm hover:bg-greenNeon/80 transition-all cursor-pointer ${props.className}  ` + props.font.className } >{props.text}</a>
    );
}
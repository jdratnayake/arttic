import "./SignUpOptionCard.css";

function SignUpOptionCard(props) {
    return (
        <div class="card">
            <div class="card-body">
                <h4 class="title text-center theme">{props.title}</h4>
                <p class="text-center">who is {props.av} - description</p>
                <ul>
                    <li class="list">{props.p1}</li>
                    <li class="list">{props.p2}</li>
                    <li class="list">{props.p3}</li>
                    <li class="list">{props.p4}</li>
                </ul>

                <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-signup">{props.btn}</button>
                </div>

            </div>
        </div>
    )
}

export default SignUpOptionCard;
import { useNavigate } from "react-router-dom";

import "./SignUpOptionCard.css";

function SignUpOptionCard({ title, btn, av,def1,def2, p1, p2, p3, p4,p5, link }) {
  const navigate = useNavigate();

  return (
    <div class="card">
      <div class="card-body desktop-view">
        <h4 class="title text-center theme-title">{title}</h4>
        <p class="text-center def">{def1}</p>
        <p class="text-center def">{def2}</p>
        <ul>
          <li class="listcd">{p1}</li>
          <li class="listcd">{p2}</li>
          <li class="listcd">{p3}</li>
          <li class="listcd">{p4}</li>
          <li class="listcd">{p5}</li>
        </ul>

        <div class="text-center">
          <button
            type="submit"
            class="btn btn-primary btn-signup"
            onClick={() => {
              navigate(link);
            }}
          >
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpOptionCard;

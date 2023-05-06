import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="py-2 projects sm:mx-3 lg:mx-0">
      <h3 className="my-2 text-2xl text-center">My Projects</h3>

      <div>
        <div className="flex items-center justify-between bg-slate-100 rounded-lg my-4">
          <h4 className="font-bold p-2">Admin Dashboard</h4>
          <div className="p-2 text-slate-600">
            <Link to="https://dash-b0ard.netlify.app" className="projects-link">
              Live
            </Link>
            <Link
              to="https://github.com/nadim-chowdhury/njs-dashboard"
              className="projects-link"
            >
              Github
            </Link>
          </div>
        </div>

        <div className="my-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <img src="/d1.png" alt="" className="projects-img" />
          <img src="/d2.png" alt="" className="projects-img" />
          <img src="/d3.png" alt="" className="projects-img" />
          {/* <img src="/d4.png" alt="" className="projects-img" /> */}
          <img src="/d5.png" alt="" className="projects-img" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between bg-slate-100 rounded-lg my-4">
          <h4 className="font-bold p-2">eCommerce Project</h4>
          <div className="p-2 text-slate-600">
            <Link to="https://sh0pcart.netlify.app" className="projects-link">
              Live
            </Link>
            <Link
              to="https://github.com/nadim-chowdhury/rjs-shopcart"
              className="projects-link"
            >
              Github
            </Link>
          </div>
        </div>

        <div className="my-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <img src="/e1.png" alt="" className="projects-img" />
          <img src="/e2.png" alt="" className="projects-img" />
          <img src="/e3.png" alt="" className="projects-img" />
          {/* <img src="/e4.png" alt="" className="projects-img" /> */}
          <img src="/e5.png" alt="" className="projects-img" />
        </div>
      </div>

      <div className="mb-2">
        <h4 className="font-bold p-2 bg-slate-100 rounded-lg my-4">
          Other Projects
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <Link to="https://coiinbase.netlify.app">
            <img className="others-project" src="/p1.png" alt="" />
          </Link>
          <Link to="https://b0oking.netlify.app">
            <img className="others-project" src="/p2.png" alt="" />
          </Link>
          <Link to="https://hoo-bnk.netlify.app">
            <img className="others-project" src="/p3.png" alt="" />
          </Link>
          <Link to="https://ec0mmerce.netlify.app">
            <img className="others-project" src="/p4.png" alt="" />
          </Link>
          <Link to="https://gpt3aiclone.netlify.app">
            <img className="others-project" src="/p5.png" alt="" />
          </Link>
          <Link to="https://greatcars.netlify.app">
            <img className="others-project" src="/p6.png" alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}

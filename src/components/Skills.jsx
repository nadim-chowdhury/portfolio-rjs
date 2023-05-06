export default function Skills() {
  return (
    <div className="py-2 sm:mx-3 lg:mx-0">
      <h2 className="title">My Skills</h2>
      <div className="grid grid-cols-5 gap-2 my-3">
        <div className="skills-icon">
          <box-icon name="html5" type="logo"></box-icon>
        </div>
        <div className="skills-icon">
          <box-icon name="css3" type="logo"></box-icon>
        </div>
        <div className="skills-icon">
          <box-icon name="javascript" type="logo"></box-icon>
        </div>
        <div className="skills-icon">
          <box-icon name="react" type="logo"></box-icon>
        </div>
        <div className="skills-icon">
          <box-icon name="nodejs" type="logo"></box-icon>
        </div>
        <div className="skills-icon">
          <box-icon name="mongodb" type="logo"></box-icon>
        </div>
        <div className="skills-icon">
          <box-icon name="tailwind-css" type="logo"></box-icon>
        </div>
        <div className="skills-icon">
          <box-icon name="git" type="logo"></box-icon>
        </div>
        <div className="skills-icon">
          <box-icon name="sass" type="logo"></box-icon>
        </div>
      </div>
    </div>
  );
}

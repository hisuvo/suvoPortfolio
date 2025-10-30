const SubTitle = ({ icon, title, text }) => {
  return (
    <div className="space-y-[14px] py-12">
      <h2 className="text-3xl font-semibold space-x-2">
        <span className="text-secondary-clr">{icon}</span>
        <span>{title}</span>
      </h2>
      <p>{text}</p>
    </div>
  );
};

export default SubTitle;

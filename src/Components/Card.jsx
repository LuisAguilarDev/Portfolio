export default function Card({
  title,
  description,
  link,
  photo,
  urlback,
  urlfront,
}) {
  return (
    <div className="Project_Card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="Project_img" src={photo} alt="Not Found" />
      </a>
      <div className="Project_cardtext">
        <p>{title}</p>
        {description.map((item) => {
          return <p key={item}>{item}</p>;
        })}
        <p>Enlaces - GitHub</p>
        <div className="container-enlaces">
          <div className="enlace">
            <span>-{'>'}</span>
            <a
              className="enlace"
              target="_blank"
              rel="noopener noreferrer"
              href={`${urlfront}`}
            >
              Frontend
            </a>
          </div>
          <div>
            <span>-{'>'}</span>
            <a
              className="enlace"
              target="_blank"
              rel="noopener noreferrer"
              href={`${urlback}`}
            >
              Backend
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

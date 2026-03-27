import './index.css';

const ExperienceCard = ({ job }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        
        <h3 className="experience-role">{job.role}</h3>
        <p className="experience-company">
          {job.company} · {job.period}
        </p>
        <p className="experience-location">{job.location}</p>
      
      </div>

      <p className="experience-description">
        {job.description}
      </p>

      <ul className="experience-tasks">
        {job.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <p className="experience-skills">
        {job.skills}
      </p>
    </div>
  );
};

export default ExperienceCard;
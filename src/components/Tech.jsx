import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { Section } from './Section';

const Tech = () => {
  return (
    <Section idName="tech">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Tech;

export type CardProps = {
  name: string
  skills: Array<string>
  image: string
}

const Card = ({ name, skills, image }: CardProps) => (
  <div className="rounded-md p-8 bg-white relative max-w-lg">
    <p className="text-5xl italic font-bold">{name}</p>

    <div className="flex">
      <ul className="mt-4">
        {skills.map(skill => (
          <li className="text-lg" key={skill}>{skill}</li>
        ))}
      </ul>

      <img
        src={image}
        alt={name}
        className="w-32 h-32 absolute right-10 top-8"
      />
    </div>
  </div>
)

export default Card

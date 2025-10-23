"use client";

export default function Standard({ data }) {
  const high = data.filter((obj) => obj.fea > 60);

  return (
    <div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio eum eius facere delectus amet quos dolores
        deleniti odit tempora totam? Tempore quo optio cupiditate non. Doloribus quo unde, soluta esse eaque architecto.
        Fuga, consequuntur ea itaque quos facere facilis corporis? Libero saepe eveniet corporis assumenda impedit
        laudantium nemo mollitia incidunt?
      </div>
      {high.map((obj, index) => (
        <div key={index} className="flex gap-2">
          <div>{obj.nam}</div>
          <div>{obj.fea}</div>
          <div>{obj.aso}</div>
        </div>
      ))}
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio eum eius facere delectus amet quos dolores
        deleniti odit tempora totam? Tempore quo optio cupiditate non. Doloribus quo unde, soluta esse eaque architecto.
        Fuga, consequuntur ea itaque quos facere facilis corporis? Libero saepe eveniet corporis assumenda impedit
        laudantium nemo mollitia incidunt?
      </div>
    </div>
  );
}

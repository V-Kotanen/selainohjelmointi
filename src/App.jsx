const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>
          Kurssin nimi: {props.course}
        </h1>
      </div>
    )
  }
  const Content = (props) => {
    console.log(props)
    return (
      <div>
        <p>
          {props.partname} {props.exercises}
        </p>
      </div>
    )
  }
  const Total = (props) => {
    console.log(props)
    return (
      <div>
        <p>
          Tehtäviä yhteensä: {props.sum}
        </p>
      </div>
    )
  }


  return (
    <div>
      <Header course={course} />
      <Content partname={part1} exercises={exercises1} />
      <Content partname={part2} exercises={exercises2} />
      <Content partname={part3} exercises={exercises3} />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )

}

export default App
function App() {
  return (
    <div>
      <Tweet
        name="Mo Foday"
        username="mofoday"
        date={new Date().toDateString()}
        message="I love coding!!"
      />
      <Tweet
        name="Ventica Woods"
        username="venticawoods"
        date={new Date().toDateString()}
        message="Coding is my favorite thing to do!!"
      />
      <Tweet
        name="Michael Foday"
        username="michaelfoday"
        date={new Date().toDateString()}
        message="I love soccer!"
      />
    </div>
  );
}

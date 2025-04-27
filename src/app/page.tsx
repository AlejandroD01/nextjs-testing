import Home from "./components/Home";
import NotesApp from "./components/NotesForm";
import TodoAndPhotoList from "./components/TodoAndPhotoList";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Home />
      <NotesApp />
      <TodoAndPhotoList />
    </div>
  )
}

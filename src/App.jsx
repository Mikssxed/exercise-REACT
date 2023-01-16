import { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter";
import List from "./components/List";
import Modal from "react-modal";
import MyModal from "./components/MyModal";

Modal.setAppElement("#root");

function App() {
  const [filtered, setFiltered] = useState("");
  const [list, setList] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentModalData, setCurrentModalData] = useState([]);

  function openModal(e) {
    setIsOpen(true);
    const id = e.target.closest("div").id;
    const currentModal = list.data.filter((item) => item.id == id)[0];
    setCurrentModalData(currentModal);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetch("https://reqres.in/api/products")
      .then((res) => res.json())
      .then((data) =>
        setList({
          ...data,
          data: [...data.data, ...data.data],
          per_page: 5,
          total_pages: 3,
        })
      )
      .catch((err) => alert(err));
  }, []);

  function handleChange(e) {
    const limit = 1;
    const regex = /^[0-9]/;
    if (regex.test(e.target.value)) {
      setFiltered(e.target.value.slice(0, limit));
    } else {
      setFiltered("");
    }
  }

  return (
    <div className="App">
      <Filter value={filtered} handleChange={handleChange} />
      <List
        openModal={openModal}
        list={list}
        value={filtered}
        itemsPerPage={5}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="onRequestClose Example"
        className="Modal"
        overlayClassName="Overlay"
      >
        <MyModal onClick={closeModal} modalData={currentModalData} />
      </Modal>
    </div>
  );
}

export default App;

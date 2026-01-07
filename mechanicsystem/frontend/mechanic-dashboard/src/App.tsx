import { useState } from 'react';
import Background from './components/background/background';
import Modal from './components/modal/modal';
import ClientContent from './components/modalContent/client/clientContent';
import WorkordersContent from './components/modalContent/workorders/workordersContent';
import MechanicContent from './components/modalContent/mechanic/mechanicContent';

type modalType = 'client' | 'workorders' | 'mechanic' | null;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeModal, setActiveModal] = useState<modalType>(null);

  function openModal(type: modalType) {
    setActiveModal(type);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setActiveModal(null);
  }
  
  return (
    <>
      <Background onSelect={openModal} />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {activeModal === 'client' && <ClientContent />}
        {activeModal === 'workorders' && <WorkordersContent />}
        {activeModal === 'mechanic' && <MechanicContent />}
      </Modal>
    </>
  );
}

export default App;

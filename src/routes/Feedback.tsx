import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, push } from "firebase/database";
import { initializeApp } from "firebase/app";
import "../css/Feedback.css";
import { VscFeedback } from "react-icons/vsc";
import { CgDanger } from 'react-icons/cg';

export default function Feedback(props: any) {
  document.title = "Curriculo Virtual - Feedback";

  const firebaseConfig = {
    apiKey: "AIzaSyDjQgnbwICCvkJ_9Hp5LUjHIs-1AmB3Z9o",
    authDomain: "curriculo-1b801.firebaseapp.com",
    databaseURL: "https://curriculo-1b801-default-rtdb.firebaseio.com",
    projectId: "curriculo-1b801",
    storageBucket: "curriculo-1b801.appspot.com",
    messagingSenderId: "654533233741",
    appId: "1:654533233741:web:6f56c69eb4c0a0dbcc6004",
    measurementId: "G-4FJ50X6856",
  };

  const data = new Date()
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear().toString();

  const app = initializeApp(firebaseConfig);

  const [autor, setAutor] = useState("");
  const [feedbackContent, setFeedback] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isFlooded, setIsFlooded] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const feedbackRef = ref(db, "feedback");
    onValue(feedbackRef, (snapshot: any) => {
      const feedbacksData: any = [];
      snapshot.forEach((childSnapshot: any) => {
        const feedback = childSnapshot.val();
        if (feedback.feedbackAceito === true) {
          feedbacksData.push(feedback);
        }
      });
      setFeedbacks(feedbacksData);
    });

  }, []);

  const sendFeedback = () => {
    // Verifica se algum campo está vazio
    if (!autor || !feedbackContent) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Verifica se o usuário já enviou feedback há menos de um minuto
    if (isFlooded) {
      alert("Espere um minuto antes de enviar outro feedback.");
      return;
    }

    setIsSending(true);

    const db = getDatabase();
    const feedbackRef = ref(db, "feedback");
    push(feedbackRef, {
      autor: autor,
      feedbackContent: feedbackContent,
      feedbackAceito: false,
      feedbackTarget: ""
    })
      .then(() => {
        setAutor("");
        setFeedback("");
        alert("Feedback enviado com sucesso!");
        setIsSending(false);
        setIsFlooded(true);
        setTimeout(() => {
          setIsFlooded(false);
        }, 60000); // Define o tempo de espera de um minuto antes de enviar outro feedback
      })
      .catch((error) => {
        alert(
          "Ocorreu um erro ao enviar o feedback. Tente novamente mais tarde."
        );
        setIsSending(false);
      });
  };

  return (
    <main className="feedback-routes">
      <section className="feedback-form">
        <h3>Feedback e mensagens</h3>
        <p>Dê um Feedback e me ajude a crescer :)</p>
        <form className="form-feedback">
          <input
            type="text"
            name="username"
            placeholder="Nome ou E-mail para Contato"
            onChange={(e) => setAutor(e.target.value)}
            value={autor}
          />
          <textarea
            name="feedback"
            cols={30}
            rows={10}
            placeholder="Feedback"
            onChange={(e) => setFeedback(e.target.value)}
            value={feedbackContent}
          ></textarea>
          <div className="btn-submit">
            <button
              className="btn btn-primary d-flex gap-2 align-items-center"
              type="button"
              onClick={sendFeedback}
              disabled={isSending}
            >
              <VscFeedback />
              {isSending ? "Enviando feedback..." : "Enviar Feedback"}
            </button>
          </div>
        </form>
      </section>

      <section className="feedback-list">
        <h3>Feedbacks Verificados</h3>
        <div className={`feedbacks-aceitos shadow`}>
          {feedbacks.length !== 0 ? (
            feedbacks.map((feedback: any) => (
              <div className={`feedback`}  key={feedback.id}>
                <span className="name-post">
                  <b>Nome</b>: {feedback.autor}
                </span>
                <span>
                  <b>Feedback</b>: {feedback.feedbackContent}
                </span>
              </div>
            ))
          ) : (
            <p style={{color: 'red', display: 'flex', gap: '5px', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' , textAlign: 'center'}}><CgDanger/> Nenhum feedback encontrado</p>
          )}
        </div>
      </section>
    </main>
  );
}

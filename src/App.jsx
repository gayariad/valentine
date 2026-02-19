import { useState, useEffect } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [hearts, setHearts] = useState([]);
  const yesButtonSize = noCount * 20 + 16;

  useEffect(() => {
    if (yesPressed) {
      // Créer une explosion de cœurs
      const newHearts = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      }));
      setHearts(newHearts);
    }
  }, [yesPressed]);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Non",
      "T'es sûr(e) ?",
      "Vraiment sûr(e) ?",
      "Réfléchis bien !",
      "Dernière chance !",
      "Tu ne vas pas me faire ça ?",
      "Tu pourrais le regretter !",
      "Prends le temps d'y penser !",
      "Tu es absolument certain(e) ?",
      "Ce serait une erreur !",
      "Aie un peu de coeur !",
      "Ne soit pas si froid(e) !",
      "Un changement d'avis ?",
      "Tu ne reconsidérerais pas ?",
      "C'est ta réponse finale ?",
      "Tu me brises le coeur... 😢",
      "Allez s'il te plaît ?",
      "Je t'en supplie... 🥺",
      "S'il te plaîîîît ! Tu me brises le coeur 💔",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900 relative">
      {/* Cœurs décoratifs flottants */}
      {!yesPressed && (
        <>
          <div className="floating-heart" style={{ left: '10%', animationDelay: '0s' }}>💕</div>
          <div className="floating-heart" style={{ left: '20%', animationDelay: '1s' }}>💖</div>
          <div className="floating-heart" style={{ left: '80%', animationDelay: '2s' }}>💝</div>
          <div className="floating-heart" style={{ left: '90%', animationDelay: '0.5s' }}>💗</div>
          <div className="floating-heart" style={{ left: '50%', animationDelay: '1.5s' }}>❤️</div>
        </>
      )}

      {yesPressed ? (
        <div className="celebration-container">
          {/* Explosion de cœurs */}
          {hearts.map((heart) => (
            <div
              key={heart.id}
              className="exploding-heart"
              style={{
                left: `${heart.left}%`,
                animationDelay: `${heart.delay}s`,
                animationDuration: `${heart.duration}s`,
              }}
            >
              ❤️
            </div>
          ))}
          
          <div className="success-message">
            <div className="big-heart">💖</div>
            <h1 className="text-5xl md:text-7xl font-bold my-6 text-rose-600 animate-bounce-in">
              Merci mon bébé
            </h1>
            <p className="text-4xl md:text-5xl font-bold text-pink-500 animate-fade-in">
              Je t'aime ❤️
            </p>
            <div className="sparkles">✨ ✨ ✨</div>
          </div>
        </div>
      ) : (
        <div className="question-container">
          {/* Carte principale avec effet 3D */}
          <div className="main-card">
            <div className="heart-icon">💕</div>
            
            <h1 className="text-4xl md:text-6xl my-6 text-center font-bold text-rose-700 leading-tight">
              Veux-tu être mon/ma<br />
              <span className="text-pink-600">Valentine ? 💖</span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 items-center mt-8">
              <button
                className="yes-button"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Oui ! 💕
              </button>
              <button
                onClick={handleNoClick}
                className="no-button"
              >
                {noCount === 0 ? "Non" : getNoButtonText()}
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <div className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-2 rounded-lg border-rose-300 bg-white/30 text-sm">
      Fait avec{" "}
      <span role="img" aria-label="heart" className="inline-block animate-pulse">
        ❤️
      </span>
    </div>
  );
};

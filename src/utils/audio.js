// Sound synthesizer disabled per user request

class PortfolioAudioSynthesizer {
  constructor() {
    this.isPlaying = false;
  }

  init() {}

  toggle() {
    return false;
  }

  playBlip() {}

  playTick() {}
}

export const audioSynth = new PortfolioAudioSynthesizer();

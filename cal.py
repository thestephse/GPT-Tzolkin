# -*- coding: utf-8 -*-

from datetime import date

def gregorian_to_dreamspell(gregorian_date):
    dreamspell_start_date = date(1987, 7, 26)
    days_since_dreamspell_start = (gregorian_date - dreamspell_start_date).days
    dreamspell_kin = (days_since_dreamspell_start) % 260 + 1
    return dreamspell_kin

def kin_to_dreamspell(kin):
    tones = ((kin - 1) % 13) + 1
    solar_seals = ((kin - 1) % 20) + 1
    return tones, solar_seals

def main():
    tone_names = {
        1: "Magnetic",
        2: "Lunar",
        3: "Electric",
        4: "Self-Existing",
        5: "Overtone",
        6: "Rhythmic",
        7: "Resonant",
        8: "Galactic",
        9: "Solar",
        10: "Planetary",
        11: "Spectral",
        12: "Crystal",
        13: "Cosmic"
    }

    solar_seal_names = {
        1: "Dragon",
        2: "Wind",
        3: "Night",
        4: "Seed",
        5: "Serpent",
        6: "Worldbridger",
        7: "Hand",
        8: "Star",
        9: "Moon",
        10: "Dog",
        11: "Monkey",
        12: "Human",
        13: "Skywalker",
        14: "Wizard",
        15: "Eagle",
        16: "Warrior",
        17: "Earth",
        18: "Mirror",
        19: "Storm",
        20: "Sun"
    }

    input_date = input("Enter a date in the format YYYY-MM-DD: ")
    year, month, day = map(int, input_date.split("-"))
    gregorian_date = date(year, month, day)
    
    dreamspell_kin = gregorian_to_dreamspell(gregorian_date)
    tones, solar_seals = kin_to_dreamspell(dreamspell_kin)
    
    print(f"Dreamspell Kin: {dreamspell_kin}")
    print(f"Tone: {tones} ({tone_names[tones]}), Solar Seal: {solar_seals} ({solar_seal_names[solar_seals]})")

if __name__ == "__main__":
    main()

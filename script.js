// --- 1. CONFIG PRESET ALOKASI ---
const PRESETS = {
    standard: [
        { name: "🏆 Hadiah Utama (Grand Prize)", percent: 50, class: "tier-1" },
        { name: "🥇 Hadiah Madya (Second Tier)", percent: 30, class: "tier-2" },
        { name: "🎁 Doorprize / Hiburan", percent: 20, class: "tier-3" }
    ],
    pyramid: [
        { name: "🥇 Juara 1", percent: 60, class: "tier-1" },
        { name: "🥈 Juara 2 & 3", percent: 25, class: "tier-2" },
        { name: "🎉 Doorprize Peserta", percent: 15, class: "tier-3" }
    ],
    equal: [
        { name: "🌟 Kategori A", percent: 33.33, class: "tier-1" },
        { name: "🌟 Kategori B", percent: 33.33, class: "tier-2" },
        { name: "🌟 Kategori C", percent: 33.34, class: "tier-3" }
    ]
};

// --- 2. AMBIL ELEMEN DOM ---
const prizeForm = document.getElementById("prize-form");
const totalPrizeInput = document.getElementById("total-prize");
const allocationPresetSelect = document.getElementById("allocation-preset");

const resultCard = document.getElementById("result-card");
const prizeListContainer = document.getElementById("prize-list-container");
const totalAllocatedDisplay = document.getElementById("total-allocated-display");

// --- 3. FUNGSI FORMAT RUPIAH ---
function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(number);
}

// --- 4. LOGIKA PEMBAGIAN HADIAH ---
prizeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const totalAmount = parseFloat(totalPrizeInput.value);
    const selectedPresetKey = allocationPresetSelect.value;
    const selectedPreset = PRESETS[selectedPresetKey];

    if (isNaN(totalAmount) || totalAmount <= 0) {
        alert("Harap masukkan total anggaran hadiah yang valid!");
        return;
    }

    prizeListContainer.innerHTML = "";
    let totalCalculated = 0;

    selectedPreset.forEach((tier) => {
        const allocatedValue = Math.round((totalAmount * tier.percent) / 100);
        totalCalculated += allocatedValue;

        // Render Item Kartu Tingkatan
        const itemEl = document.createElement("div");
        itemEl.className = `prize-item ${tier.class}`;

        itemEl.innerHTML = `
            <div>
                <div class="prize-title">${tier.name}</div>
                <div class="prize-meta">Porsi: ${tier.percent}%</div>
            </div>
            <div class="prize-value">${formatRupiah(allocatedValue)}</div>
        `;

        prizeListContainer.appendChild(itemEl);
    });

    totalAllocatedDisplay.textContent = formatRupiah(totalCalculated);
    resultCard.classList.remove("hidden");
});

import sharp from "sharp";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

const DARGAH_IMAGE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/a/a2/Gumbad_Of_Dargah_Aala_Hazrat_5.jpg";

export default async function Icon() {
  const roundedCornersSvg = Buffer.from(
    `<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="64" height="64" rx="14" ry="14" fill="#fff"/>
    </svg>`
  );

  const borderOverlaySvg = Buffer.from(
    `<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="62" height="62" rx="13" ry="13" fill="none" stroke="#bd9150" stroke-width="2" stroke-opacity="0.85"/>
    </svg>`
  );

  try {
    const res = await fetch(DARGAH_IMAGE_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; BareillyLove/1.0)",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch favicon source image: ${res.status}`);
    }

    const inputBuffer = Buffer.from(await res.arrayBuffer());

    const pngBuffer = await sharp(inputBuffer)
      .resize(64, 64, { fit: "cover", position: "centre" })
      .composite([
        { input: roundedCornersSvg, blend: "dest-in" },
        { input: borderOverlaySvg, blend: "over" },
      ])
      .png()
      .toBuffer();

    return new Response(new Uint8Array(pngBuffer), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400, immutable",
      },
    });
  } catch {
    const fallbackSvg = Buffer.from(
      `<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="64" height="64" rx="14" ry="14" fill="#2b2118"/>
        <path d="M32 10 L32 16 M20 36 C20 24 26 18 32 16 C38 18 44 24 44 36 Z" fill="#bd9150" stroke="#bd9150" stroke-width="2"/>
        <rect x="16" y="36" width="32" height="16" rx="2" fill="#fbf6ee"/>
        <rect x="1" y="1" width="62" height="62" rx="13" ry="13" fill="none" stroke="#bd9150" stroke-width="2"/>
      </svg>`
    );
    const pngBuffer = await sharp(fallbackSvg).png().toBuffer();
    return new Response(new Uint8Array(pngBuffer), {
      headers: {
        "Content-Type": "image/png",
      },
    });
  }
}

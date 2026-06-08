from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math
import random
from pathlib import Path

OUT = Path('/home/ubuntu/tt_marble_website/mobile_menu_mockup.png')
W, H = 1600, 1000
img = Image.new('RGB', (W, H), '#080706')
d = ImageDraw.Draw(img)

# Monolithic Editorial Luxury design reminder:
# deep charcoal field, ivory serif typography, restrained brass accents,
# no decorative menu numbering, no secondary item descriptions, no generic centered UI.
font_paths = [
    '/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf',
    '/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf',
    '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf',
    '/usr/share/fonts/truetype/liberation/LiberationSansNarrow-Regular.ttf',
]
serif = font_paths[0]
serif_i = font_paths[1]
sans = font_paths[2]
sans_c = font_paths[3]

def f(path, size):
    return ImageFont.truetype(path, size)

# Background subtle editorial texture
for y in range(H):
    shade = int(8 + 18 * (y / H))
    d.line([(0, y), (W, y)], fill=(shade, max(6, shade - 2), max(5, shade - 4)))

random.seed(11)
for _ in range(92):
    x0 = random.randint(-200, W)
    y0 = random.randint(-200, H)
    length = random.randint(250, 900)
    angle = random.uniform(-0.65, 0.65)
    points = []
    for i in range(8):
        x = x0 + math.cos(angle) * length * i / 7 + random.randint(-18, 18)
        y = y0 + math.sin(angle) * length * i / 7 + random.randint(-18, 18)
        points.append((x, y))
    col = random.choice([(59, 53, 43), (43, 39, 34), (82, 68, 48)])
    d.line(points, fill=col, width=random.choice([1, 1, 2]))

brass = '#D2AE67'
ivory = '#F2EDE3'
muted = '#BDB5A8'
line = '#3B342A'
black = '#0C0B09'

# Board title outside the phone screens; the live site is unchanged.
d.text((80, 56), 'TT MARBLE — CLEAN MOBILE NAVIGATION MOCKUP', font=f(sans_c, 30), fill=brass)
d.text((80, 96), 'Cleaner proposal only: logo header, icon control, large section links, enquiry action.', font=f(sans, 22), fill=muted)

# Phone drawing helper
def phone_frame(x, y, w, h, label):
    shadow = Image.new('RGBA', (w + 70, h + 70), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle((35, 35, w + 35, h + 35), radius=44, fill=(0, 0, 0, 165))
    shadow = shadow.filter(ImageFilter.GaussianBlur(22))
    img.paste(shadow, (x - 35, y - 25), shadow)
    d.rounded_rectangle((x, y, x + w, y + h), radius=42, fill='#11100E', outline='#4A3B26', width=2)
    d.rounded_rectangle((x + 14, y + 14, x + w - 14, y + h - 14), radius=30, fill=black, outline='#241F1A', width=1)
    d.text((x, y - 44), label, font=f(sans_c, 24), fill=ivory)
    return (x + 14, y + 14, w - 28, h - 28)

def draw_logo(x, y):
    d.rectangle((x, y, x + 34, y + 34), outline=brass, width=1)
    d.text((x + 9, y + 6), 'TT', font=f(serif, 18), fill=ivory)
    d.text((x + 48, y - 1), 'MARBLE', font=f(serif, 20), fill=ivory)
    d.text((x + 49, y + 23), 'FABRICATION ATELIER', font=f(sans_c, 10), fill=muted)

def draw_hamburger(cx, cy):
    d.rectangle((cx - 23, cy - 15, cx + 23, cy + 15), outline='#806C42', width=1)
    for off in [-7, 0, 7]:
        d.line((cx - 11, cy + off, cx + 11, cy + off), fill=ivory, width=1)

def draw_close(cx, cy):
    d.rectangle((cx - 23, cy - 15, cx + 23, cy + 15), outline='#806C42', width=1)
    d.line((cx - 8, cy - 8, cx + 8, cy + 8), fill=ivory, width=1)
    d.line((cx + 8, cy - 8, cx - 8, cy + 8), fill=ivory, width=1)

# Left: closed state
lx, ly, lw, lh = phone_frame(150, 190, 500, 720, 'A. CLOSED HEADER')
d.rectangle((lx, ly, lx + lw, ly + lh), fill='#090806')
for yy in range(ly, ly + lh):
    alpha = (yy - ly) / lh
    r = int(11 + 18 * alpha)
    g = int(10 + 13 * alpha)
    b = int(8 + 9 * alpha)
    d.line((lx, yy, lx + lw, yy), fill=(r, g, b))
for _ in range(30):
    sx = random.randint(lx - 100, lx + lw + 80)
    sy = random.randint(ly + 80, ly + lh - 80)
    pts = []
    for i in range(6):
        pts.append((sx + i * 90 + random.randint(-15, 15), sy + i * random.randint(-28, 22)))
    d.line(pts, fill=random.choice(['#382F25', '#4B3B27', '#221F1B']), width=1)
layer = Image.new('RGBA', (lw, lh), (0, 0, 0, 0))
ld = ImageDraw.Draw(layer)
for yy in range(lh):
    opacity = int(35 + 135 * (1 - yy / lh))
    ld.line((0, yy, lw, yy), fill=(0, 0, 0, opacity))
img.paste(layer, (lx, ly), layer)

# Header bar with logo and icon only
d.rectangle((lx, ly, lx + lw, ly + 76), fill='#0B0A08', outline='#24201B')
draw_logo(lx + 24, ly + 21)
draw_hamburger(lx + lw - 69, ly + 38)

# Hero content retained to show the closed-page context
d.text((lx + 34, ly + 214), 'RAW SLAB TO INSTALL-READY STONEWORK', font=f(sans_c, 13), fill=muted)
d.text((lx + 34, ly + 258), 'Marble,', font=f(serif, 62), fill=ivory)
d.text((lx + 34, ly + 321), 'cut with intent.', font=f(serif_i, 52), fill=brass)
d.rounded_rectangle((lx + 34, ly + 536, lx + 250, ly + 586), radius=0, fill=brass)
d.text((lx + 66, ly + 553), 'START A PROJECT', font=f(sans_c, 16), fill='#11100E')

# Right: open overlay
rx, ry, rw, rh = phone_frame(890, 190, 500, 720, 'B. OPEN NAVIGATION')
d.rectangle((rx, ry, rx + rw, ry + rh), fill='#0A0907')

# subtle vertical brass glow
for i in range(120):
    opacity = max(0, 60 - i // 2)
    x = rx + rw - 130 + i
    if rx <= x <= rx + rw:
        d.line((x, ry, x, ry + rh), fill=(45 + opacity // 3, 34 + opacity // 5, 16))

# marble vein texture
for _ in range(46):
    sx = random.randint(rx - 60, rx + rw)
    sy = random.randint(ry, ry + rh)
    pts = []
    for i in range(5):
        pts.append((sx + i * 75 + random.randint(-12, 12), sy + i * random.randint(-20, 18)))
    d.line(pts, fill=random.choice(['#29241D', '#3D3021', '#1C1A17']), width=1)

# Header bar with logo and close icon only
d.rectangle((rx, ry, rx + rw, ry + 76), fill='#0B0A08', outline='#24201B')
draw_logo(rx + 24, ry + 21)
draw_close(rx + rw - 69, ry + 38)

# Clean section links only: no heading, no numbering, no descriptions.
items = ['Craft', 'Technology', 'Projects', 'About', 'Contact']
y0 = ry + 170
for i, title in enumerate(items):
    y = y0 + i * 82
    d.line((rx + 42, y - 22, rx + rw - 42, y - 22), fill=line, width=1)
    d.text((rx + 42, y), title, font=f(serif, 42), fill=ivory)
    d.text((rx + rw - 67, y + 10), '›', font=f(serif, 38), fill=brass)
d.line((rx + 42, y0 + len(items) * 82 - 22, rx + rw - 42, y0 + len(items) * 82 - 22), fill=line, width=1)

# enquiry button
d.rectangle((rx + 34, ry + rh - 76, rx + rw - 34, ry + rh - 24), outline=brass, width=1)
d.text((rx + 145, ry + rh - 58), 'START AN ENQUIRY', font=f(sans_c, 16), fill=brass)

# Bottom note outside the phone screens
note_y = 940
d.text((80, note_y), 'Mockup only:', font=f(sans_c, 22), fill=brass)
d.text((230, note_y), 'The live website remains unchanged until this cleaner mobile navigation is approved.', font=f(sans, 21), fill=muted)

img.save(OUT)
print(OUT)

# ARSITEKTUR --- INCLUNOVA Dashboard

## 1. Prinsip Arsitektur

INCLUNOVA menggunakan arsitektur ekosistem dengan dashboard sebagai
layer pengelolaan dan monitoring.

``` text
                ┌─────────────────────┐
                │   TEACHER DASHBOARD │
                └──────────┬──────────┘
                           │
                ┌──────────▼──────────┐
                │ INCLUNOVA PLATFORM  │
                │ Content + Identity  │
                │ Data + AI + Sync    │
                └───────┬───────┬─────┘
                        │       │
             ┌──────────▼─┐   ┌─▼─────────────┐
             │ SMARTWATCH │   │ PARENT        │
             │   SISWA    │   │ DASHBOARD     │
             └────────────┘   └───────────────┘
                        │
             ┌──────────▼─────────┐
             │ AI ADAPTIVE ENGINE │
             └────────────────────┘
```

------------------------------------------------------------------------

## 2. Layer Arsitektur

### Layer 1 --- Presentation

Client: - Teacher Dashboard. - Parent Dashboard. - Smart Board
Interface. - Smart Lab Interface. - Smartwatch UI.

Tanggung jawab: - Menampilkan data. - Menerima input. - Menjalankan
interaksi pengguna. - Menampilkan notifikasi dan feedback.

### Layer 2 --- Application

Service: - Authentication. - User management. - Class management. -
Material management. - Quiz service. - Notification service. - Learning
progress service. - Device synchronization. - Dashboard aggregation.

### Layer 3 --- AI

AI Adaptive Learning Engine.

Input: - Quiz result. - Learning duration. - Material interaction. -
Activity. - Accessibility needs. - Historical progress.

Output: - Recommended material. - Difficulty level. - Delivery mode. -
Learning priority. - Progress insight.

### Layer 4 --- Data

Data utama: - Users. - Students. - Teachers. - Parents. - Classes. -
Materials. - Quizzes. - Quiz answers. - Learning activities. - Learning
profiles. - AI recommendations. - Device status. - Synchronization logs.

### Layer 5 --- Device / IoT

Perangkat: - Smartwatch. - Smart Board. - Smart Lab. - Gateway /
connectivity layer. - Charging station.

------------------------------------------------------------------------

## 3. Data Flow

### Content Flow

``` text
Teacher
  ↓
Dashboard
  ↓
Content Service
  ↓
INCLUNOVA Platform
  ↓
Synchronization Layer
  ↓
Smartwatch
  ↓
Student
```

### Student Data Flow

``` text
Student
  ↓
Smartwatch
  ↓
Learning Activity
  ↓
IoT / Sync Layer
  ↓
Data Platform
  ↓
AI Analytics
```

### Analytics Flow

``` text
Smartwatch Data
      ↓
Data Platform
      ↓
AI Analytics Engine
      ↓
Student Learning Profile
      ↓
┌───────────────┬────────────────┐
↓               ↓
Teacher         Parent
Dashboard       Dashboard
```

### Adaptive Feedback

``` text
AI Analysis
    ↓
Learning Recommendation
    ↓
Teacher Dashboard
    ↓
Teacher Decision
    ↓
New / Adjusted Material
    ↓
Smartwatch
```

------------------------------------------------------------------------

## 4. Dashboard Component Architecture

``` text
Dashboard App
│
├── Auth
│
├── Teacher Module
│   ├── Overview
│   ├── Classes
│   ├── Students
│   ├── Materials
│   ├── Quiz
│   ├── Analytics
│   ├── AI Recommendation
│   ├── Smart Board
│   └── Smart Lab
│
├── Parent Module
│   ├── Overview
│   ├── Child Progress
│   ├── Activity
│   ├── Tasks
│   ├── Materials
│   ├── AI Insight
│   └── Monitoring
│
├── Notification
│
└── Profile / Settings
```

------------------------------------------------------------------------

## 5. Data Model Konseptual

### User

-   id
-   name
-   role
-   email
-   avatar
-   created_at

### Student

-   user_id
-   class_id
-   learning_profile_id
-   device_id
-   accessibility_profile

### Teacher

-   user_id
-   school_id
-   class_ids

### Parent

-   user_id
-   student_ids

### Material

-   id
-   title
-   type
-   subject
-   content
-   target_class
-   target_students
-   accessibility_mode

### Quiz

-   id
-   title
-   questions
-   target_class
-   schedule
-   adaptive_mode

### LearningActivity

-   student_id
-   material_id
-   duration
-   interaction
-   completion
-   timestamp

### QuizResult

-   student_id
-   quiz_id
-   score
-   answers
-   timestamp

### AIRecommendation

-   student_id
-   recommended_material
-   difficulty
-   delivery_mode
-   reason
-   generated_at

------------------------------------------------------------------------

## 6. Role-Based Access

### Teacher

Dapat: - Mengelola kelas. - Membuat materi. - Membuat kuis. - Melihat
data siswa yang menjadi tanggung jawabnya. - Melihat AI recommendation.

### Parent

Dapat: - Melihat data anak yang terhubung. - Melihat progress. - Melihat
aktivitas pembelajaran. - Melihat insight. - Melihat informasi
monitoring yang diizinkan.

### Student

Data siswa terutama dikonsumsi melalui smartwatch dan antarmuka
pembelajaran yang disediakan sekolah.

------------------------------------------------------------------------

## 7. Synchronization Architecture

Sistem harus mendukung kondisi online dan offline.

``` text
ONLINE
Smartwatch
   ↓
Sync
   ↓
Platform
   ↓
Cloud Data
```

``` text
OFFLINE
Smartwatch
   ↓
Local Storage
   ↓
Student Learning
   ↓
Connection Available
   ↓
Sync Queue
   ↓
Platform
```

Sebelum siswa meninggalkan sekolah, materi dan data terbaru
disinkronkan. Di rumah, siswa dapat mengakses materi yang sudah tersedia
secara offline.

Jika LoRa digunakan pada implementasi, posisinya harus didefinisikan
secara spesifik pada komunikasi perangkat/gateway dan tidak disamakan
dengan koneksi internet/cloud.

------------------------------------------------------------------------

## 8. AI Adaptive Architecture

``` text
                ┌────────────────────┐
                │ Student Data       │
                │ - Quiz             │
                │ - Duration         │
                │ - Interaction      │
                │ - Activity         │
                │ - Accessibility    │
                └─────────┬──────────┘
                          ↓
                ┌────────────────────┐
                │ AI Analytics       │
                └─────────┬──────────┘
                          ↓
                ┌────────────────────┐
                │ Learning Profile   │
                └─────────┬──────────┘
                          ↓
                ┌────────────────────┐
                │ Recommendation     │
                ├────────────────────┤
                │ Material           │
                │ Difficulty         │
                │ Delivery Mode      │
                └─────────┬──────────┘
                          ↓
                Smartwatch + Teacher
```

------------------------------------------------------------------------

## 9. Security

-   Authentication.
-   Role-based access control.
-   Secure session management.
-   Encryption in transit.
-   Data minimization.
-   Audit log.
-   Permission untuk data lokasi.
-   Permission untuk data pembelajaran.
-   Separation antara data siswa dan data dashboard yang dapat diakses
    masing-masing role.

------------------------------------------------------------------------

## 10. Integration

### Smart Board

-   Material synchronization.
-   Quiz synchronization.
-   Interactive activity.
-   Teacher control.

### Smart Lab

-   Simulation activity.
-   IoT learning.
-   AR learning.
-   Collaborative classroom activity.

### Smartwatch

-   Material.
-   Quiz.
-   TTS.
-   STT.
-   Haptic.
-   Learning data.
-   Heart rate.
-   Location.
-   Offline data.

------------------------------------------------------------------------

## 11. Architecture Principle

INCLUNOVA bukan aplikasi dashboard tunggal. Dashboard merupakan salah
satu interface dalam ekosistem yang menghubungkan guru, orang tua,
siswa, smartwatch, Smart Board, Smart Lab, dan AI.

import React from 'react';
import { Camera, Eye, Users, Heart, CheckCircle, XCircle } from 'lucide-react';

const QuickPhotoGuide = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-6 border-b-4 border-pink-500 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Quick Photo Guide for Field Staff</h1>
        <p className="text-gray-600">5 essential tips for capturing compelling photos in the field</p>
      </div>

      {/* Essential Tips */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">✓ Five Essential Tips</h2>
        
        {/* Tip 1 */}
        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
          <div className="flex items-start gap-3">
            <Eye className="text-blue-600 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">1. Get Down to Their Level</h3>
              <p className="text-gray-700 mb-2">Kneel, crouch, or sit to shoot at eye level with children or seated adults. This creates connection and shows their perspective.</p>
              <p className="text-sm italic text-gray-600">→ Don't stand and shoot downward - it feels distant and looking down at people</p>
            </div>
          </div>
        </div>

        {/* Tip 2 */}
        <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
          <div className="flex items-start gap-3">
            <Camera className="text-green-600 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">2. Get Close & Fill the Frame</h3>
              <p className="text-gray-700 mb-2">Take a few steps closer than feels comfortable. Focus on faces, hands at work, or the action. Eliminate distracting backgrounds.</p>
              <p className="text-sm italic text-gray-600">→ If you can't see emotion or details clearly, you're too far away</p>
            </div>
          </div>
        </div>

        {/* Tip 3 */}
        <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
          <div className="flex items-start gap-3">
            <Heart className="text-purple-600 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">3. Capture Genuine Moments</h3>
              <p className="text-gray-700 mb-2">Wait for natural smiles, concentration, interaction. Don't ask people to pose or look at the camera. Document what's actually happening.</p>
              <p className="text-sm italic text-gray-600">→ The best shots happen when people forget you're there</p>
            </div>
          </div>
        </div>

        {/* Tip 4 */}
        <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
          <div className="flex items-start gap-3">
            <Users className="text-orange-600 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">4. Show Context + Close-ups</h3>
              <p className="text-gray-700 mb-2">Take both types: Wide shots that show WHERE (classroom, water source, clinic) and close-ups that show WHO and emotions (faces, hands, eyes).</p>
              <p className="text-sm italic text-gray-600">→ Variety tells a complete story</p>
            </div>
          </div>
        </div>

        {/* Tip 5 */}
        <div className="bg-teal-50 p-5 rounded-lg border-l-4 border-teal-500">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-teal-600 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">5. Look for Good Light</h3>
              <p className="text-gray-700 mb-2">Best times: Morning (6-11am) or late afternoon (4-6pm). In classrooms, position subjects near windows. Avoid harsh overhead sun.</p>
              <p className="text-sm italic text-gray-600">→ If faces have dark shadows under eyes/nose, move to shade</p>
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Do's */}
        <div className="bg-green-50 p-5 rounded-lg">
          <h3 className="font-bold text-xl text-green-800 mb-4 flex items-center gap-2">
            <CheckCircle size={24} />
            DO
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Focus on faces and eyes to show emotion</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Capture children engaged in activities (not just staring at camera)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Show interactions between people</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Take multiple shots - be patient for the right moment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Hold phone/camera steady (plant your feet!)</span>
            </li>
          </ul>
        </div>

        {/* Don'ts */}
        <div className="bg-red-50 p-5 rounded-lg">
          <h3 className="font-bold text-xl text-red-800 mb-4 flex items-center gap-2">
            <XCircle size={24} />
            DON'T
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Shoot from standing height looking down at children</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Cut off heads, hands, or important action at frame edges</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Include lots of empty space (ceiling, floor, walls)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Ask people to pose or say "cheese"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Use filters or heavy editing</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Consent Reminder */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 mb-8 rounded-lg">
        <h3 className="font-bold text-lg text-gray-900 mb-2">⚠️ CONSENT REMINDER</h3>
        <div className="text-gray-700 space-y-2">
          <p className="font-semibold">Before taking any recognizable photos:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Explain who you are and why you're taking photos</li>
            <li>Get written consent using the proper form</li>
            <li>For children: get consent from parent/guardian/teacher</li>
            <li>Be respectful - if someone seems uncomfortable, don't photograph them</li>
          </ul>
          <p className="text-sm italic mt-3">Wide shots of public events (like assemblies) don't require individual consent, but any close-up of an identifiable person does.</p>
        </div>
      </div>

      {/* What We're Looking For */}
      <div className="bg-gray-50 p-5 rounded-lg mb-8">
        <h3 className="font-bold text-xl text-gray-900 mb-4">What Makes a Great Photo for Storytelling?</h3>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="font-semibold mb-2">For classrooms/medicine distribution:</p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>Students concentrating on work</li>
              <li>Hands receiving medicine/raising hands</li>
              <li>Teacher interacting with students</li>
              <li>Genuine smiles and engagement</li>
              <li>Wide shot showing the full classroom setting</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">For field work/surveys:</p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>Team members at work in the field</li>
              <li>Community members collaborating with staff</li>
              <li>Close-ups of hands doing technical work</li>
              <li>Environmental context (water sources, terrain)</li>
              <li>Respectful documentation of processes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Tech Tips */}
      <div className="bg-blue-50 p-5 rounded-lg mb-6">
        <h3 className="font-bold text-lg text-gray-900 mb-3">📱 Quick Phone Camera Tips</h3>
        <ul className="text-gray-700 space-y-2 text-sm">
          <li><span className="font-semibold">• Tap the screen</span> to focus on your subject's face before taking the photo</li>
          <li><span className="font-semibold">• Clean your lens</span> - a quick wipe makes a huge difference</li>
          <li><span className="font-semibold">• Hold horizontally</span> (landscape) unless specifically requested otherwise</li>
          <li><span className="font-semibold">• Take 3-5 shots</span> of each moment to ensure you get a good one</li>
        </ul>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 pt-4 border-t">
        <p>Questions? Contact the Communications team</p>
        <p className="mt-1">For full training materials, see the Storytelling Handbook</p>
      </div>
    </div>
  );
};

export default QuickPhotoGuide;
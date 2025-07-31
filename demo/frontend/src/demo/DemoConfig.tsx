/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {Effects} from '@/common/components/video/effects/Effects';

type EffectLayers = {
  background: keyof Effects;
  highlight: keyof Effects;
};

export const DEMO_SHORT_NAME = 'Magic Hour Remix Anything Demo';
export const RESEARCH_BY_META_AI = 'By Magic Hour AI';
export const DEMO_FRIENDLY_NAME = 'Magic Hour Remix Anything Demo';
export const VIDEO_WATERMARK_TEXT = ``;
export const PROJECT_GITHUB_URL =
  'https://github.com/magichour/magic-hour-remix-anything';
export const AIDEMOS_URL = 'https://magichour.ai';
export const ABOUT_URL = 'https://magichour.ai';
export const EMAIL_ADDRESS = 'magic-hour@magichour.ai';
export const BLOG_URL = 'https://magichour.ai/blog';

export const VIDEO_API_ENDPOINT = 'http://localhost:7263';
export const INFERENCE_API_ENDPOINT = 'http://localhost:7263';

export const demoObjectLimit = 3;

export const DEFAULT_EFFECT_LAYERS: EffectLayers = {
  background: 'Original',
  highlight: 'Overlay',
};

export const MAX_UPLOAD_FILE_SIZE = '70MB';

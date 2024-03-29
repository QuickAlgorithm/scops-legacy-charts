/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t } from '@superset-ui/translation';
import { ChartMetadata, ChartPlugin } from '@superset-ui/chart';
import transformProps from '../transformProps';
import thumbnail from './images/thumbnail.png';
import { ANNOTATION_TYPES } from '../vendor/superset/AnnotationTypes';

const metadata = new ChartMetadata({
  credits: ['http://nvd3.org'],
  description: 'A bar chart where the x axis is time',
  name: t('Scops Time-series Bar Chart'),
  supportedAnnotationTypes: [ANNOTATION_TYPES.INTERVAL, ANNOTATION_TYPES.EVENT],
  thumbnail,
  useLegacyApi: true,
});

export default class ScopsBarChartPlugin extends ChartPlugin {
  constructor() {
    super({
      loadChart: () => import('../ReactNVD3'),
      metadata,
      transformProps,
    });
  }
}
